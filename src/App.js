import React from "react";
import "./App.scss";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Link from "./components/Link";

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
      active: parseInt(e.currentTarget.attributes.index.value)
    });
  }

  render() {
    let content,
      name,
      image = "";
    let link = pages.map((item, i) => {
      image = this.state.active === i ? item.image : image;
      content = this.state.active === i ? item.content : content;
      name = this.state.active === i ? item.name : name;
      return (
        <Link
          key={i}
          index={i}
          title={item.name}
          className={this.state.active === i ? "active" : ""}
          onClick={this.changeHandle.bind(this)}
        />
      );
    });
    return (
      <div className="App">
        <header className="header">
          <figure className="header__figure">
            <a href="/">
              <Logo title="Bk Aguilar logo" className="header__figure__logo" />
            </a>
            <h1 className="header__figure__text">bk Aguilar</h1>
          </figure>
          <nav className="header__nav">{link}</nav>
        </header>
        <section id={name} className={name + "-section"}>
          <figure>{image}</figure>
          <p>{content}</p>
        </section>
      </div>
    );
  }
}

export default App;
