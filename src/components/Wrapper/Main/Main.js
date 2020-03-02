import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ReactComponent as Skills } from "../../../images/skills.svg";
import Button from "../../Widgets/Button/Button";
import "./Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.figureRef = null;
    this.subTitleRef = null;
    this.paragraphRef = [];
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersectionActive");
        } else {
          entry.target.classList.remove("intersectionActive");
        }
      });
    });
  }

  observeEachElement() {
    if (this.figureRef) {
      this.observer.observe(this.figureRef);
    }

    if (this.subTitleRef) {
      this.observer.observe(this.subTitleRef);
    }

    if (this.paragraphRef) {
      this.paragraphRef.forEach(item => {
        this.observer.observe(item);
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.observeEachElement();
  }

  render() {
    let paragraphElement;
    const { pages, active } = this.props;
    const { title, image, name, content, id, paragraphs, subTitle } = pages[
      active
    ];

    if (paragraphs) {
      paragraphElement = paragraphs.map((text, index) => (
        <p
          key={index}
          ref={e => (this.paragraphRef[index] = e)}
          className="Main__paragraphs__content"
        >
          {text}
        </p>
      ));
    }
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          in
          key={id}
          timeout={1000}
          appear={true}
          classNames="titleAnimation"
        >
          <main tabIndex="0" id={name} className={"Main Main--" + name}>
            <div className="Main__text">
              <figure className="patterns"></figure>
              <h2 className="Main__text__title">
                {title} <span className="title-point">.</span>
              </h2>
              <p className="Main__text__content">{content}</p>
              {active === 0 && (
                <Button
                  type="button"
                  onClick={this.props.onClick}
                  className="Button--contact"
                  value="Contact me"
                  emoji="➝"
                />
              )}
            </div>
            {image && <figure className="Main__figure">{image}</figure>}
            {active === 1 && <div className="scroll-label">scroll</div>}
            {paragraphs && (
              <article className="Main__article">
                <figure
                  className="Main__article__figure"
                  ref={e => (this.figureRef = e)}
                >
                  <Skills />
                </figure>
                <div className="Main__paragraphs">
                  <h3
                    className="Main__paragraphs__subtitle"
                    ref={e => (this.subTitleRef = e)}
                  >
                    {subTitle} <span className="title-point">.</span>
                  </h3>
                  {paragraphElement}
                </div>
              </article>
            )}
          </main>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Main;
