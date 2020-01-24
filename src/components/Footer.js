import React from "react";
import Link from "./Link";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    const { servicesLinks, socialLinks, logo } = this.props;

    let socialMedia = socialLinks.map((item, i) => {
      return (
        <Link
          key={item.name}
          href={item.link}
          target="_blank"
          name={item.name}
          className="Link--footer"
        />
      );
    });

    let services = servicesLinks.map((item, i) => {
      return (
        <Link
          key={item.name}
          href={item.link}
          target="_blank"
          name={item.name}
          className="Link--footer"
        />
      );
    });
    return (
      <footer className="Footer">
        <div className="Footer__links">
          <figure className="Footer__links__logo">{logo}</figure>
          <nav className="Footer__links__nav">
            <h3 className="Footer__links__nav__title">Di hola</h3>
            {services}
          </nav>
          <nav className="Footer__links__nav">
            <h3 className="Footer__links__nav__title">Social Media</h3>
            {socialMedia}
          </nav>
        </div>
        <div className="Footer__author">
          <small>
            <span id="year" className="Footer__author__year">
              <span role="img" aria-label="copy">
                &copy;
              </span>
              2019
            </span>
            <Link
              href="/"
              className="Footer__author__name"
              name="Bessy K. Aguilar"
              title="Bk Aguilar"
              aria-label="Bk Aguilar"
              target="_blank"
            />
          </small>
          <small>
            Hecho con
            <span className="emoji" role="img" aria-label="beer">
              🍻
            </span>
            y
            <span className="emoji" role="img" aria-label="heart">
              ❤
            </span>
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
