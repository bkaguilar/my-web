import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "../../Widgets/Button/Button";
import "./Main.scss";

class Main extends React.Component {
  render() {
    const { pages, active } = this.props;
    const { title, image, name, content, id } = pages[active];

    let paragraphs = content.map((item, index) => {
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
                  value="contact"
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
