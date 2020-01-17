import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

class Header extends React.Component {
  render() {
    const NAV_ITEMS = ["inicio", "personal", "contacto"];
    return (
      <header className="header">
        <figure className="header__figure">
          <a href="/" className="header__figure__logo">
            <Logo title="Bk Aguilar logo" />
          </a>
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
