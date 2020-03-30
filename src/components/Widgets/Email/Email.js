import React from "react";
import Anchor from "../Anchor/Anchor";

let windowLargeSize = window.innerWidth >= 768;
class Email extends React.Component {
  clipboardEmail(e) {
    if (windowLargeSize) {
      e.preventDefault();
      let inp = document.createElement("input");
      document.body.appendChild(inp);
      inp.value = e.currentTarget.textContent;
      inp.select();
      document.execCommand("copy", false);
      inp.remove();
      e.currentTarget.title =
        this.props.lang === "en" ? "Email copied!" : "¡Email copiado!";
    }
  }

  emailHover(e) {
    if (windowLargeSize) {
      e.currentTarget.title =
        this.props.lang === "en"
          ? "Copy to clipboard"
          : "Copiar al portapapeles";
    }
  }
  render() {
    let en_lang = this.props.lang === "en";
    let en_email = "hello@bkaguilar.com";
    let es_email = "hola@bkaguilar.com";
    return (
      <Anchor
        href={`mailto:${en_lang ? en_email : es_email}?subject=🤟🏽${
          en_lang ? "hi" : "hola"
        } Bessy`}
        name={en_lang ? en_email : es_email}
        value={en_lang ? en_email : es_email}
        className={this.props.className + " Email"}
        onClick={this.clipboardEmail.bind(this)}
        onHover={this.emailHover.bind(this)}
      />
    );
  }
}

export default Email;
