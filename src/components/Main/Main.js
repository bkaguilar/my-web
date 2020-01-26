import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Main.scss";

class Main extends React.Component {
  render() {
    const { pages, active } = this.props;
    const { title, image, name, content, button, id } = pages[active];

    let paragraphs = content.map((item, index) => {
      if (content.length > 0) {
        return (
          <p key={index} className="Main__text__content">
            {item}
          </p>
        );
      }
      return content;
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
            {image && <figure className="Main__figure">{image}</figure>}
            <div className="Main__text">
              <h2 className="Main__text__title">
                {title} <span className="title-point">.</span>
              </h2>
              {paragraphs}
              {button}

            </div>
          </main >
        </CSSTransition>
      </TransitionGroup >
    );
  }
}

export default Main;
