import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Main.scss";

class Main extends React.Component {
  render() {
    const { pages, active } = this.props;
    const { title, image, name, content, button, id } = pages[active];

    let paragraphs = content.map((item, index) => {
      if (content.length > 1) {
        return (
          <p key={index} className="Main__text__content">
            {item}
          </p>
        );
      }
      return (
        <p key={index} className="Main__text__content">
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
              <div className="Main__text__patterns"></div>
              <h2 className="Main__text__title">
                {title} <span className="title-point">.</span>
              </h2>
              {paragraphs}
              {button}
            </div>
            {image && <figure className="Main__figure">{image}</figure>}
          </main>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Main;
