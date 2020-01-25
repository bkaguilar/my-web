import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Main.scss";

class Main extends React.Component {
  render() {
    const { pages, active } = this.props;
    const { title, image, name, content, button } = pages[active];

    console.log('hey');

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
      <main tabIndex="0" id={name} className={"Main Main--" + name}>
        {image && <figure className="Main__figure">{image}</figure>}
        <div className="Main__text">
          <TransitionGroup component={null}>
            <CSSTransition
              key={"title" + active}
              timeout={1000}
              classNames="titleAnimation"
            >
              <h2 className="Main__text__title">
                {title} <span className="title-point">.</span>
              </h2>
            </CSSTransition>
          </TransitionGroup>
          {paragraphs}
          {button}
        </div>
      </main>
    );
  }
}

export default Main;
