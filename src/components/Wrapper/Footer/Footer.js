import React from "react";
import Anchor from "../../Widgets/Anchor/Anchor";
import "./Footer.scss";

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
        e.currentTarget.title = "Email copiado";
      }
    }
  }

  emailHover(e) {
    let emailValue = e.currentTarget.innerText;
    if (emailValue === "hola@bkaguilar.com") {
      e.currentTarget.title = "Copiar al portapapeles";
    }
  }

  render() {
    const { servicesAnchors, socialAnchors, logo } = this.props;
    let year = new Date().getFullYear();
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
            <h3 className="Footer__anchors__nav__title">Di hola</h3>
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
              ⚛️
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
