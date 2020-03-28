import React from "react";
import { FormattedMessage } from "react-intl";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ReactComponent as Photography } from "../../../images/photography.svg";
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.active !== prevProps.active) {
      if (this.figureRef) {
        this.observer.observe(this.figureRef);
      }

      if (this.subTitleRef) {
        this.observer.observe(this.subTitleRef);
      }

      if (this.paragraphRef && this.props.active === 1) {
        this.paragraphRef.forEach(item => {
          this.observer.observe(item);
        });
      }
    }
  }

  render() {
    let paragraphElement;
    const { pages, sections, active } = this.props;
    const { title, image, content, id, paragraphs, subTitle } = pages[active];

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
          <main
            tabIndex="0"
            id={sections[active]}
            className={"Main Main--" + sections[active]}
          >
            <div className="Main__text">
              <figure className="patterns"></figure>
              <div style={{ overflow: "hidden" }}>
                <h2 className="Main__text__title">
                  {title} <span className="title-point">.</span>
                </h2>
              </div>
              <p className="Main__text__content">{content}</p>
              {active === 0 && (
                <Button
                  type="button"
                  onClick={this.props.onClick}
                  className="Button--contact"
                  value={<FormattedMessage id="button.contact" />}
                  emoji="➝"
                />
              )}
            </div>
            {image && <figure className="Main__figure">{image}</figure>}
            {active !== 0 && <div className="scroll-label">scroll</div>}
            {paragraphs && (
              <article className="Main__article">
                <figure
                  className="Main__article__figure"
                  ref={e => (this.figureRef = e)}
                >
                  <Photography />
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
