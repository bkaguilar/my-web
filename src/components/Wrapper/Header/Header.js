import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { ReactComponent as Plant } from "../../../images/plant.svg";
import Email from "../../Widgets/Email/Email";
import Anchor from "../../Widgets/Anchor/Anchor";
import Button from "../../Widgets/Button/Button";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const { onClick, showMenu, logo, pages, sections } = this.props;
    let menuLabel;

    if (this.props.isMenuVisible) {
      menuLabel = this.props.lang === "en" ? "Close" : "Cerrar";
    } else {
      menuLabel = "Menú";
    }
    let anchors = pages.map((item, i) => {
      return (
        <Anchor
          key={sections[i]}
          index={i}
          title={sections[i]}
          name={sections[i]}
          href={"#" + sections[i]}
          value={item.name}
          className={
            this.props.active === i ? "Anchor--header active" : "Anchor--header"
          }
          onClick={onClick}
        />
      );
    });
    return (
      <header className="Header">
        <figure className="Header__figure">
          <a
            href="/"
            title="Bessy Aguilar"
            aria-label="Header logo"
            alt="BkAguilar"
          >
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
            <Button
              type="button"
              className="Button--header"
              value={<FormattedMessage id="button.resume" />}
            />
          </Link>
          {this.props.isMenuVisible && (
            <div className="Header__nav__plant">
              <Plant />
            </div>
          )}
          {this.props.isMenuVisible && (
            <div className="Header__nav__email">
              <Email lang={this.props.lang} className="Header__nav__email__a" />
            </div>
          )}
        </nav>
        <button
          type="button"
          aria-label="Menu button"
          className="Header__responsive"
          onClick={showMenu}
          style={{
            color: this.props.isMenuVisible ? "#f2f4f6" : "inherit"
          }}
        >
          <span className="Header__responsive__text">{menuLabel}</span>
          <span
            aria-label="lines"
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
