import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ReactComponent as Skills } from "../../../images/skills.svg";
import Button from "../../Widgets/Button/Button";
import "./Main.scss";

class Main extends React.Component {
  render() {
    let paragraphElement;
    const { pages, active } = this.props;
    const { title, image, name, content, id, paragraphs, subTitle } = pages[
      active
    ];

    if (paragraphs) {
      paragraphElement = paragraphs.map((text, index) => (
        <p key={index} className="Main__paragraphs__content">
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
                <figure className="Main__figure">
                  <Skills />
                </figure>
                <div className="Main__paragraphs">
                  <h3 className="Main__paragraphs__subtitle">
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
