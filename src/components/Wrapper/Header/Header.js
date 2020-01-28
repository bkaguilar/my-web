import React from "react";
import { Link } from "react-router-dom";
import Anchor from "../../Widgets/Anchor/Anchor";
import Button from "../../Widgets/Button/Button";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const { onClick, showMenu, logo, pages } = this.props;
    let anchors = pages.map((item, i) => {
      return (
        <Anchor
          key={item.name}
          index={i}
          name={item.name}
          href={"#" + item.name}
          className={
            this.props.active === i ? "Anchor--header active" : "Anchor--header"
          }
          onClick={onClick}
        />
      );
    });

    // FIXME: style={{
    //     background: active % 2 === 1 ? "#191919" : "#f2f4f6"
    //   }}

    return (
      <header className="Header">
        <figure className="Header__figure">
          <a href="/" title="Bessy Aguilar">
            {logo}
            <h1 className="Header__figure__text">bk Aguilar</h1>
          </a>
        </figure>
        <nav
          className={
            this.props.isMenuVisible ? "Header__nav showMenu" : "Header__nav"
          }
        >
          {anchors}
          <Link to="/resume" target="_blank">
            <Button type="button" className="Button--header" value="Resume" />
          </Link>
          {this.props.isMenuVisible && (
            <div className="Header__nav__email">
              <div className="patterns"></div>
              <a
                href="mailto:hola@bkaguilar.com?subject=🤟🏽Hola Bessy, quiero proponerte algo"
                rel="noopener noreferrer"
                title="E-mail"
              >
                hola@bkaguilar.com
                <span
                  role="img"
                  aria-label="woman tech emoji"
                  className="emoji"
                >
                  &#9998;
                </span>
              </a>
            </div>
          )}
        </nav>
        <button
          type="button"
          className="Header__responsive"
          onClick={showMenu}
          style={{
            color: this.props.isMenuVisible ? "#191919" : "inherit"
          }}
        >
          <span className="Header__responsive__text">
            {this.props.isMenuVisible ? "Cerrar" : "Menú"}
          </span>
          <span
            className={
              this.props.isMenuVisible
                ? "Header__responsive__lines is-visible"
                : "Header__responsive__lines"
            }
          ></span>
        </button>
      </header>
    );
  }
}

export default Header;
