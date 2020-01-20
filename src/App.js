import React from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Link from "./components/Link";
import "./App.scss";

const pages = [
  {
    name: "inicio",
    image: <Portada />,
    content:
      "Lately we all have been hearing a lot about “JavaScript Modules Everyone is likely wondering what to do with them, and how do they even play a vital role in our daily lives…?"
  },
  {
    name: "personal",
    image: <Nature />,
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspe"
  },
  {
    name: "contacto",
    image: <Message />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspessss"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  changeHandle(e) {
    this.setState({
      active: parseInt(e.currentTarget.attributes.index.value),
      pageActive: !this.setState.pageActive
    });
  }

  render() {
    let content,
      name,
      image = "";
    let link = pages.map((item, i) => {
      const active = this.state.active === i;
      image = active ? item.image : image;
      content = active ? item.content : content;
      name = active ? item.name : name;
      return (
        <Link
          key={item.name}
          index={i}
          title={item.name}
          className={active ? "active" : ""}
          onClick={this.changeHandle.bind(this)}
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
          id={name}
          className={
            this.state.pageChange ? "App__section animate" : "App__section"
          }
        >
          <figure className="App__section__figure">{image}</figure>
          <div className="App__section__text">
            <h2 className="App__section__text__title">Hmmm</h2>
            <p className="App__section__text__content">{content}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
