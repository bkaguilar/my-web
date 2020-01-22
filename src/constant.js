import React from "react";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Button from "./components/Button";

export const PAGES = [
  {
    name: "inicio",
    image: <Portada />,
    title: "Desarrolladora Front end.",
    button: (
      <Button
        type="button"
        className="Button__contact"
        value="Vamos a hablar!"
      />
    ),
    content: "Front-end developer y diseñadora web blabalbal"
  },
  {
    name: "personal",
    image: <Nature />,
    title: "Over the past 9 years",
    content:
      "Halo, mi nombre es Bessy Aguilar, Soy desarrolladora front-end con sede en Zaragoza, tengo 27 años. Mi formación académica es de Técnico en Computación, pero soy fundamentalmente autodidacta. Actualmente me dedico al diseño y desarrollo de páginas web. Mis principales habilidades son:"
  },
  {
    name: "contacto",
    image: <Message />,
    title: "Estemos en contacto!",
    content: "¿Tienes alguna pregunta o propuesta?, .."
  }
];

export const SOCIAL = [
  {
    name: "Github",
    link: "https://github.com/bkaguilar"
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/bk-aguilar"
  },
  {
    name: "CodePen",
    link: "https://codepen.io/bkaguilar/pens/public/"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bk_aguilar/"
  }
];

export const SERVICES = [
  {
    name: "hola@bkaguilar.com",
    link: "mailto:hola@bkaguilar.com"
  },
  {
    name: "Telegram",
    link: "https://t.me/bkaguilar"
  }
];
