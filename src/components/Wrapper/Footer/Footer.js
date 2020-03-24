import React from "react";
import Anchor from "../../Widgets/Anchor/Anchor";
import "./Footer.scss";

let year = new Date().getFullYear();

class Footer extends React.Component {
  clipboardEmail(e) {
    if (window.innerWidth >= 768) {
      let emailValue = e.currentTarget.innerText;
      if (emailValue === "hola@bkaguilar.com") {
        e.preventDefault();
        let inp = document.createElement("input");
        document.body.appendChild(inp);
        inp.value = e.currentTarget.textContent;
        inp.select();
        document.execCommand("copy", false);
        inp.remove();
        e.currentTarget.title = "Email copied";
      }
    }
  }

  emailHover(e) {
    let emailValue = e.currentTarget.innerText;
    if (emailValue === "hola@bkaguilar.com") {
      e.currentTarget.title = "Copy to clipboard";
    }
  }

  render() {
    const { servicesAnchors, socialAnchors, logo } = this.props;
    let socialMedia = socialAnchors.map((item, i) => {
      return (
        <Anchor
          key={item.name}
          href={item.anchor}
          target="_blank"
          name={item.name}
          className="Anchor--footer"
        />
      );
    });

    let services = servicesAnchors.map((item, i) => {
      return (
        <Anchor
          key={item.name}
          href={item.anchor}
          target="_blank"
          name={item.name}
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
            <h3 className="Footer__anchors__nav__title">Say Hello</h3>
            {services}
          </nav>
          <nav className="Footer__anchors__nav">
            <h3 className="Footer__anchors__nav__title">Social Media</h3>
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
              name="Bessy K. Aguilar"
              title="Bk Aguilar"
              aria-label="Bk Aguilar"
              target="_blank"
            />
          </small>
          <small>
            Made with
            <span className="emoji" role="img" aria-label="react-atom">
              ⚛️
            </span>
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
