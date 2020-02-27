import React from "react";
import { Link } from "react-router-dom";
import Anchor from "../../Widgets/Anchor/Anchor";
import { ReactComponent as Plant } from "../../../images/plant.svg";
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
        <figure
          className="theme-icon"
          onClick={this.props.handleChangeTheme}
          title="Change theme"
          alt="icon for change theme"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 200 200"
            enableBackground="new 0 0 200 200"
          >
            <path
              className="theme-icon__sun"
              style={{
                transition: "all 200ms ease",
                fill: this.props.blackTheme ? "white" : "#191919",
                d: this.props.blackTheme
                  ? "path('M130,121.2c-26.9,0-48.7-21.8-48.7-48.7c0-16.4,8.1-30.9,20.5-39.7c-0.6,0-1.2,0-1.8,0c-37.1,0-67.2,30.1-67.2,67.2 c0,37.1,30.1,67.2,67.2,67.2c35.7,0,64.9-27.9,67.1-63.1C158.1,114.6,144.9,121.2,130,121.2z')"
                  : "path('M40,100a60,60 0 1,0 120,0a60,60 0 1,0 -120,0')"
              }}
            />
            <g
              className="theme-icon__points"
              style={{
                display: this.props.blackTheme ? "none" : ""
              }}
            >
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="99.9"
                cy="12.2"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="100.4"
                cy="187.8"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="27.3"
                cy="39.5"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="172.6"
                cy="39.5"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="172.6"
                cy="160.6"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="27.4"
                cy="159.9"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="188.7"
                cy="99.3"
                r="10"
              />
              <circle
                stroke="#000000"
                strokeWidth="5"
                strokeMiterlimit="10"
                cx="11.3"
                cy="99.8"
                r="10"
              />
            </g>
          </svg>
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
            <div className="Header__nav__plant">
              <Plant />
            </div>
          )}
          {this.props.isMenuVisible && (
            <div className="Header__nav__email">
              <a
                href="mailto:hola@bkaguilar.com?subject=🤟🏽Hola Bessy, quiero proponerte algo"
                rel="noopener noreferrer"
                title="Enviame un E-mail ;)"
                alt="hola@bkaguilar.com"
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
          aria-label="Menu button"
          className="Header__responsive"
          onClick={showMenu}
          style={{
            color: this.props.isMenuVisible ? "#f2f4f6" : "inherit"
          }}
        >
          <span className="Header__responsive__text">
            {this.props.isMenuVisible ? "Cerrar" : "Menú"}
          </span>
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
