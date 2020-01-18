import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const NAV_ITEMS = ["inicio", "personal", "contacto"];
    return (
      <header className="header">
        <figure className="header__figure">
          <a href="/">
            <Logo title="Bk Aguilar logo" className="header__figure__logo" />
          </a>
          <h1 className="header__figure__text">bk Aguilar</h1>
        </figure>
        <nav className="header__nav">
          {NAV_ITEMS.map(item => {
            return <Item title={item} className="header__nav__item" />;
          })}
        </nav>
      </header>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <a
        href={"#" + this.props.title}
        title={this.props.title}
        class={this.props.className}
      >
        {this.props.title}
      </a>
    );
  }
}
export default Header;
