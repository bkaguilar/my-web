import React from "react";
// import { CSSTransition } from "react-transition-group";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Link from "./components/Link";
import Button from "./components/Button";
import "./App.scss";

const pages = [
  {
    name: "inicio",
    image: <Portada />,
    title: "Front end Developer.",
    button: <Button type="button" className="btn__contac" value="Contactar" />,
    content:
      "Lately we all have been hearing a lot about “JavaScript Modules Everyone is likely wondering what to do with them, and how do they even play a vital role in our daily lives…?"
  },
  {
    name: "personal",
    image: <Nature />,
    title: "Over the past 9 years",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspe"
  },
  {
    name: "contacto",
    image: <Message />,
    title: "Send me a message!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspessss"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      blackTheme: ""
    };
  }

  handleChange(e) {
    this.setState({
      active: parseInt(e.currentTarget.attributes.index.value)
    });
  }

  handleWheel(e) {
    if (e.deltaY > 1 && this.state.active + 1 < pages.length) {
      this.setState({
        active: this.state.active + 1
      });
    } else if (e.deltaY < -1 && this.state.active >= 1) {
      this.setState({
        active: this.state.active - 1
      });
    }
  }

  handleKeydown(e) {
    if (e.keyCode === 40 && this.state.active + 1 < pages.length) {
      this.setState({
        active: this.state.active + 1
      });
    }
    if (e.keyCode === 38 && this.state.active >= 1) {
      this.setState({
        active: this.state.active - 1
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      if (this.state.active % 2 === 1) {
        this.setState({
          blackTheme: true
        });
      } else {
        this.setState({
          blackTheme: false
        });
      }
    }
  }

  render() {
    let content,
      name,
      image,
      button,
      title = "";
    let link = pages.map((item, i) => {
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
          title={item.name}
          className={active ? "active" : ""}
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
          className={
            this.state.blackTheme
              ? "App__section black-theme"
              : "App__section white-theme"
          }
          onWheel={this.handleWheel.bind(this)}
          onKeyDown={this.handleKeydown.bind(this)}
        >
          <figure className="App__section__figure">{image}</figure>
          <div className="App__section__text">
            <h2 className="App__section__text__title">{title}</h2>
            <p className="App__section__text__content">{content}</p>
            {button}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
