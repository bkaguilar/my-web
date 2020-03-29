import React from "react";
import Anchor from "../../Widgets/Anchor/Anchor";
import { EMAIL_COPY_TITLE, EMAIL_TITLE } from "../../../constants";
import { FormattedMessage } from "react-intl";
import "./Footer.scss";

let year = new Date().getFullYear();
let windowLargeSize = window.innerWidth >= 768;
class Footer extends React.Component {
  clipboardEmail(e) {
    if (windowLargeSize) {
      if (parseInt(e.currentTarget.id) === 0) {
        console.log("hey");
        e.preventDefault();
        let inp = document.createElement("input");
        document.body.appendChild(inp);
        inp.value = e.currentTarget.textContent;
        inp.select();
        document.execCommand("copy", false);
        inp.remove();
        e.currentTarget.title = EMAIL_TITLE;
      }
    }
  }

  emailHover(e) {
    if (windowLargeSize) {
      if (parseInt(e.currentTarget.id) === 0) {
        e.currentTarget.title = EMAIL_COPY_TITLE;
      }
    }
  }

  render() {
    const { servicesAnchors, socialAnchors, logo } = this.props;
    let socialMedia = socialAnchors.map((item, index) => {
      return (
        <Anchor
          key={item.name}
          href={item.anchor}
          target="_blank"
          name={item.name}
          title={item.name}
          value={item.name}
          className="Anchor--footer"
        />
      );
    });

    let services = servicesAnchors.map((item, index) => {
      return (
        <Anchor
          key={item.name}
          id={index}
          href={item.anchor}
          target="_blank"
          name={item.name}
          title={item.name}
          value={item.name}
          className="Anchor--footer"
          onClick={this.clipboardEmail.bind(this)}
          onHover={this.emailHover.bind(this)}
        />
      );
    });
    return (
      <footer className="Footer">
        <div className="Footer__anchors">
          <figure className="Footer__anchors__logo">{logo}</figure>
          <nav className="Footer__anchors__nav">
            <h3 className="Footer__anchors__nav__title">
              <FormattedMessage id="footer.hello" />
            </h3>
            {services}
          </nav>
          <nav className="Footer__anchors__nav">
            <h3 className="Footer__anchors__nav__title">
              <FormattedMessage id="footer.social" />
            </h3>
            {socialMedia}
          </nav>
        </div>
        <div className="Footer__author">
          <small>
            <span id="year" className="Footer__author__year">
              <span role="img" aria-label="copy">
                &copy;
              </span>
              {year}
            </span>
            <Anchor
              href="/"
              className="Anchor--footer__author"
              value="Bessy K. Aguilar"
              title="Bk Aguilar"
              aria-label="Bk Aguilar"
              target="_blank"
            />
          </small>
          <small>
            Made with
            <a href="https://reactjs.org/" title="React">
              <span className="emoji" role="img" aria-label="react-atom">
                ⚛
              </span>
            </a>
            and
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
