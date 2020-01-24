import React from "react";
import Link from "./Link";
import Button from "./Button";
import "./Header.scss";

class Header extends React.Component {
  render() {
    const { active, onClick, logo, pages } = this.props;
    let link = pages.map((item, i) => {
      return (
        <Link
          key={item.name}
          index={i}
          name={item.name}
          href={"#" + item.name}
          className={active === i ? "Link--header active" : "Link--header"}
          onClick={onClick}
        />
      );
    });
    return (
      <header className="Header">
        <figure className="Header__figure">
          <a href="/" title="Bessy Aguilar">
            {logo}
            <h1 className="Header__figure__text">bk Aguilar</h1>
          </a>
        </figure>
        <nav className="Header__nav">
          {link}
          <Button type="button" className="Button--header" value="Resume" />
        </nav>
        <div className="Header__responsive">
          <Button
            type="button"
            onClick=""
            className="Button--responsive"
            value="Menú"
          />
          <span className="Header__responsive__lines"></span>
        </div>
      </header>
    );
  }
}

export default Header;
