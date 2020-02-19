import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "../../Widgets/Button/Button";
import "./Main.scss";

class Main extends React.Component {
  render() {
    const { pages, active } = this.props;
    const { title, image, name, content, id } = pages[active];
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
              <p className="Main__text__content">{content.paragrah1}</p>
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
            {image && <figure className="Main__figure">{image}</figure>}
            {content.paragrah2 && (
              <div className="Main__text">
                <p className="Main__text__content">{content.paragrah2}</p>
                <p className="Main__text__content">{content.paragrah3}</p>
                <p className="Main__text__content">{content.paragrah4}</p>
                <p className="Main__text__content">{content.paragrah5}</p>
                <p className="Main__text__content">{content.paragrah6}</p>
              </div>
            )}
          </main>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Main;
