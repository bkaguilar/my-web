import React from "react";
// import { CSSTransition } from "react-transition-group";
import { ReactComponent as Logo } from "./images/logo.svg";
import { PAGES } from "./constant";
import Link from "./components/Link";
import Dot from "./components/Dot";
import "./App.scss";

let lastTime = new Date().getTime();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  nextPage(sign) {
    return this.setState({
      active: this.state.active + 1
    });
  }

  prevPage(sign) {
    return this.setState({
      active: this.state.active - 1
    });
  }

  handleChange(e) {
    this.setState({
      active: parseInt(e.currentTarget.attributes.index.value)
    });
  }

  handleWheel(e) {
    let time = new Date().getTime();
    if (time - lastTime < 400) return;
    lastTime = time;

    if (e.deltaY > 1 && this.state.active + 1 < PAGES.length) {
      this.nextPage();
    } else if (e.deltaY < -1 && this.state.active >= 1) {
      this.prevPage();
    }
  }

  handleKeydown(e) {
    if (e.keyCode === 40 && this.state.active + 1 < PAGES.length) {
      this.nextPage();
    }
    if (e.keyCode === 38 && this.state.active >= 1) {
      this.prevPage();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      if (this.state.active % 2 === 1) {
        document.body.setAttribute("data-theme", "black-theme");
      } else {
        document.body.setAttribute("data-theme", "white-theme");
      }
    }
  }

  renderContent(key, i, item) {
    console.log`${key} = this.state.active === ${i} ? ${item.key} : ${key}`;
  }

  render() {
    let content,
      name,
      image,
      button,
      title = "";

    let link = PAGES.map((item, i) => {
      const active = this.state.active === i;
      image = active ? item.image : image;
      content = active ? item.content : content;
      name = active ? item.name : name;
      title = active ? item.title : title;
      button = active ? item.button : button;
      return (
        <Link
          key={item.name}
          index={i}
          name={item.name}
          className={active ? " active" : ""}
          onClick={this.handleChange.bind(this)}
        />
      );
    });

    let dot = PAGES.map((item, i) => {
      return (
        <Dot
          key={item.name}
          index={i}
          name={item.name}
          className={this.state.active === i ? " active" : ""}
          onClick={this.handleChange.bind(this)}
        />
      );
    });

    return (
      <div className="App">
        <header className="App__header">
          <figure className="App__header__figure">
            <a href="/">
              <Logo
                title="Bk Aguilar logo"
                className="App__header__figure__logo"
              />
            </a>
            <h1 className="App__header__figure__text">bk Aguilar</h1>
          </figure>
          <nav className="App__header__nav">{link}</nav>
        </header>
        <section
          tabIndex="0"
          id={name}
          className="App__section"
          onWheel={this.handleWheel.bind(this)}
          onKeyDown={this.handleKeydown.bind(this)}
        >
          <figure className="App__section__figure">{image}</figure>
          <div className="App__section__text">
            <h2 className="App__section__text__title">{title}</h2>
            <p className="App__section__text__content">{content}</p>
            {button}
          </div>
          <ul className="App__section__dots">{dot}</ul>
        </section>
      </div>
    );
  }
}

export default App;
