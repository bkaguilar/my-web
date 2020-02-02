import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "../../Widgets/Button/Button";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.ref = [];
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showAnimation");
      } else {
        entry.target.classList.remove("showAnimation");
      }
    });
  });

  observeEachText() {
    this.ref.forEach(item => {
      this.observer.observe(item);
    });
  }

  componentDidMount() {
    this.observeEachText();
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      this.observeEachText();
    }
  }

  render() {
    const { pages, active } = this.props;
    const { title, image, name, content, id } = pages[active];

    let paragraphs = content.map((item, index) => {
      return (
        <p
          key={index}
          ref={e => (this.ref[index] = e)}
          className="Main__text__content"
        >
          {item}
        </p>
      );
    });

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
              <div className="patterns"></div>
              <h2 className="Main__text__title">
                {title} <span className="title-point">.</span>
              </h2>
              {paragraphs}
              {active === 0 && (
                <Button
                  type="button"
                  onClick={this.props.onClick}
                  className="Button--contact"
                  value="Vamos a hablar"
                  emoji="➝"
                />
              )}
            </div>
            <figure className="Main__figure">{image}</figure>
          </main>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Main;
