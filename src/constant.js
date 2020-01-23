import React from "react";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Button from "./components/Button";

export const PAGES = [
  {
    name: "inicio",
    image: <Portada />,
    title: "Hola, mi nombre es Bessy",
    button: (
      <Button
        type="button"
        className="Button--contact"
        value="Vamos a hablar!"
      />
    ),
    content: ["Soy desarrolladora Front-end y diseñadora web de Zaragoza"]
  },
  {
    name: "personal",
    // image: <Nature />,
    title: "Un poco sobre mi",
    content: [
      "Soy desarrolladora front-end desde el 2019, hondureña 🇭🇳 con sede en Zaragoza, España. Mi formación académica es de Técnico en Computación, pero soy fundamentalmente autodidacta.",
      "Desde hace un par de años me empezo a interesar el diseño de web y he estado en continuo aprendizaje desde entonces, ahora mismo me estoy especializando en el desarrollo front-end.",
      "Actualmente estoy en busca de nuevos retos despues de tomarme unos meses para seguir preparandome y aprendiendo nuevas tecnologias del sector.",
      "Mas alla de escribir codigo, me encanta la fotografía, me gusta pasar tiempo viajando y disparando con mi camara, ya sea con la reflex o con mi movil; O bien leyendo un buen libro de fantasia medieval o distopia y si lleva la palabra Tolkien mucho mejor 🧝🏽‍♀️.",
      "Mis habilidades técnicas van desde Diseño web responsive, HTML5, CSS, Javascript, Docker, React, Animaciones SVG, Suite Adobe (Photoshop, Illustrator, XD, Lightroom), Software de control de versiones (Git)"
    ]
  },
  {
    name: "contacto",
    image: <Message />,
    title: "Estemos en contacto!",
    content: [
      "¿Tienes alguna pregunta o propuesta?, escribeme y hazmela saber."
    ]
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
