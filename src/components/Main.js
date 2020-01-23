import React from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Main.scss";

class Main extends React.Component {
  render() {
    const { pages, actives } = this.props;
    let content,
      name,
      image,
      button,
      title = "";

    pages.map((item, i) => {
      const active = actives === i;
      image = active ? item.image : image;
      content = active ? item.content : content;
      name = active ? item.name : name;
      title = active ? item.title : title;
      button = active ? item.button : button;
    });

    let paragraphs = content.map(item => {
      if (content.length > 0) {
        return <p className="Main__text__content">{item}</p>;
      }
    });

    return (
      <main tabIndex="0" id={name} className={"Main Main--" + name}>
        {image && <figure className="Main__figure">{image}</figure>}
        <div className="Main__text">
          {/* <TransitionGroup component={null}>
              <CSSTransition
                key={"title" + this.state.active}
                timeout={1000}
                classNames="titleAnimation" */}

          <h2 className="Main__text__title">
            {title} <span className="title-point">.</span>
          </h2>
          {/* </CSSTransition>
            </TransitionGroup> */}
          {paragraphs}
          {button}
        </div>
      </main>
    );
  }
}

export default Main;
