import React from "react";
import Link from "../Widgets/Link/Link";
import Button from "../Widgets/Button/Button";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const { onClick, showMenu, logo, pages } = this.props;
    let links = pages.map((item, i) => {
      return (
        <Link
          key={item.name}
          index={i}
          name={item.name}
          href={"#" + item.name}
          className={
            this.props.active === i ? "Link--header active" : "Link--header"
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
            this.props.isVisible ? "Header__nav showMenu" : "Header__nav"
          }
        >
          {links}
          <Button type="button" className="Button--header" value="Resume" />
          {this.props.isVisible && (
            <div className="Header__nav__email">
              <a
                href="mailto:hola@bkaguilar.com"
                subject="🤟🏽Hola Bessy, quiero proponerte algo"
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
            color: this.props.isVisible ? "#191919" : "inherit"
          }}
        >
          <span className="Header__responsive__text">
            {this.props.isVisible ? "Cerrar" : "Menú"}
          </span>
          <span
            className={
              this.props.isVisible
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