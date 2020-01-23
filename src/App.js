import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ReactComponent as Logo } from "./images/logo.svg";
import { PAGES, SOCIAL, SERVICES } from "./constant";
import Link from "./components/Link";
import Button from "./components/Button";
import Dot from "./components/Dot";
import "./App.scss";

let lastTime = new Date().getTime();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      isLast: false,
      isLoading: true
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

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          isLoading: false
        });
      }.bind(this),
      1200
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      if (this.state.active % 2 === 1) {
        document.body.setAttribute("data-theme", "black-theme");
      } else {
        document.body.setAttribute("data-theme", "white-theme");
      }
      if (this.state.active === PAGES.length - 1) {
        this.setState({
          isLast: true
        });
      } else {
        this.setState({
          isLast: false
        });
      }
    }
  }

  render() {
    const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
    let content,
      name,
      image,
      button,
      title = "";

    PAGES.map((item, i) => {
      const active = this.state.active === i;
      image = active ? item.image : image;
      content = active ? item.content : content;
      name = active ? item.name : name;
      title = active ? item.title : title;
      button = active ? item.button : button;
    });

    let paragraphs = content.map(item => {
      if (content.length > 0) {
        return (
          <p
            className={
              this.state.isAnimate
                ? "App__section__text__content class"
                : "App__section__text__content"
            }
          >
            {item}
          </p>
        );
      }
    });

    let link = PAGES.map((item, i) => {
      return (
        <Link
          key={item.name}
          index={i}
          name={item.name}
          href={"#" + item.name}
          className={
            this.state.active === i
              ? "App__header__nav__item active"
              : "App__header__nav__item"
          }
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

    let socialMedia = SOCIAL.map((item, i) => {
      return (
        <Link
          key={item.name}
          href={item.link}
          target="_blank"
          name={item.name}
          className="App__footer__links__nav__item"
        />
      );
    });

    let services = SERVICES.map((item, i) => {
      return (
        <Link
          key={item.name}
          href={item.link}
          target="_blank"
          name={item.name}
          className="App__footer__links__nav__item"
        />
      );
    });

    return (
      <div
        className="App"
        onWheel={this.handleWheel.bind(this)}
        onKeyDown={this.handleKeydown.bind(this)}
      >
        {this.state.isLoading && <section className="loading"></section>}
        <header className="App__header">
          <figure className="App__header__figure">
            <a href="/" title="Bessy Aguilar">
              {LOGO}
              <h1 className="App__header__figure__text">bk Aguilar</h1>
            </a>
          </figure>
          <nav className="App__header__nav">
            {link}
            <Button
              type="button"
              className="App__header__nav__button"
              value="Resume"
            />
          </nav>
        </header>
        <section
          tabIndex="0"
          id={name}
          className={"App__section App__section--" + name}
        >
          {image && <figure className="App__section__figure">{image}</figure>}
          <div className="App__section__text">
            {/* <TransitionGroup component={null}>
              <CSSTransition
                key={"title" + this.state.active}
                timeout={1000}
                classNames="titleAnimation" */}

            <h2 className="App__section__text__title">
              {title} <span className="title-point">.</span>
            </h2>
            {/* </CSSTransition>
            </TransitionGroup> */}
            {paragraphs}
            {button}
          </div>
        </section>
        <ul className="App__dots">{dot}</ul>
        {this.state.isLast && (
          <footer className="App__footer">
            <div className="App__footer__links">
              <figure className="App__footer__links__logo">{LOGO}</figure>
              <nav className="App__footer__links__nav">
                <h3 className="App__footer__links__nav__title">Di hola</h3>
                {services}
              </nav>
              <nav className="App__footer__links__nav">
                <h3 className="App__footer__links__nav__title">Social Media</h3>
                {socialMedia}
              </nav>
            </div>
            <div className="App__footer__author">
              <small>
                <span id="year" className="App__footer__author__year">
                  <span role="img" aria-label="copy">
                    &copy;
                  </span>
                  2019
                </span>
                <Link
                  href="/"
                  className="App__footer__author__name"
                  name="Bessy K. Aguilar"
                  title="Bk Aguilar"
                  aria-label="Bk Aguilar"
                  target="_blank"
                />
              </small>
              <small>
                Hecho con
                <span
                  className="App__footer__author__emoji"
                  role="img"
                  aria-label="copy"
                >
                  🍻
                </span>
                y
                <span
                  className="App__footer__author__emoji"
                  role="img"
                  aria-label="copy"
                >
                  ❤
                </span>
              </small>
            </div>
          </footer>
        )}
      </div>
    );
  }
}

export default App;
