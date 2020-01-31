import React from "react";
import Anchor from "./components/Widgets/Anchor/Anchor";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Bike } from "./images/bike.svg";
import { ReactComponent as Plane } from "./images/plane.svg";

export const RESUME_PROFILE = [
  {
    id: 1,
    sectionName: "Educación",
    year: "2007 - 2009",
    title: "Tecnico en computacíon",
    site: "INTAE, San Pedro Sula, Honduras"
  },
  {
    id: 2,
    sectionName: "Experiencia Laboral",
    year: "Marzo 2019 - Septiembre 2019",
    title: "Diseñadora Web",
    site: "BaboonLab",
    description:
      "I orchestrated and developed the frontend infrastructure, design and functionality for hellotax's new JavaScript-centric app powered by Vue and also managed a co-engineer."
  }
];

export const RESUME_DATA = [
  {
    sectionName: "Contacto",
    items: [
      <Anchor
        href="mailto:hola@bkaguilar.com?subject=🤟🏽Hola Bessy, quiero proponerte algo"
        name="hola@bkaguilar.com"
        target="__blank"
        className="Anchor--resume"
      />,
      <Anchor
        href="bkaguilar.com"
        name="bkaguilar.com"
        target="__blank"
        className="Anchor--resume"
      />,
      <Anchor
        href="t.me/bkaguilar"
        name="t.me/bkaguilar"
        target="__blank"
        className="Anchor--resume"
      />
    ]
  },
  {
    sectionName: "Habilidades",
    items: [
      "Control de versiones GIT",
      "Docker",
      "React",
      "Javascript",
      "HTML5",
      "CSS3",
      "NodeJS",
      "Suite Adobe(Illustrator, Photoshop, XD, Lightroom)"
    ]
  }
];

export const PAGES = [
  {
    id: 0,
    name: "inicio",
    image: <Portada />,
    title: "Desarrolladora Front end",
    content: [
      "Soy Bessy, desarrolladora con pasion por el desarrollo responsive front end y el diseño establecida en Zaragoza"
    ]
  },
  {
    id: 1,
    name: "personal",
    image: <Bike />,
    title: "Hello",
    content: [
      "Soy desarrolladora front-end desde el 2019, hondureña 🇭🇳 con sede en Zaragoza, España. Mi formación académica es de Técnico en Computación, pero soy fundamentalmente autodidacta.",
      "Desde hace un par de años me empezo a interesar el diseño de web y he estado en continuo aprendizaje desde entonces, ahora mismo me estoy especializando en el desarrollo front-end.",
      "Actualmente estoy en busca de nuevos retos despues de tomarme unos meses para seguir preparandome y aprendiendo nuevas tecnologias del sector."
      // "Mas alla de escribir codigo, me encanta la fotografía, me gusta pasar tiempo viajando y disparando con mi camara, ya sea con la reflex o con mi movil; O bien leyendo un buen libro de fantasia medieval o distopia y si lleva la palabra Tolkien mucho mejor 🧝🏽‍♀️.",
      // "Mis habilidades técnicas van desde Diseño web responsive, HTML5, CSS, Javascript, Docker, React, Animaciones SVG, Suite Adobe (Photoshop, Illustrator, XD, Lightroom), Software de control de versiones (Git)",
      // "Soy desarrolladora front-end desde el 2019, hondureña 🇭🇳 con sede en Zaragoza, España. Mi formación académica es de Técnico en Computación, pero soy fundamentalmente autodidacta.",
      // "Desde hace un par de años me empezo a interesar el diseño de web y he estado en continuo aprendizaje desde entonces, ahora mismo me estoy especializando en el desarrollo front-end.",
      // "Actualmente estoy en busca de nuevos retos despues de tomarme unos meses para seguir preparandome y aprendiendo nuevas tecnologias del sector.",
      // "Mas alla de escribir codigo, me encanta la fotografía, me gusta pasar tiempo viajando y disparando con mi camara, ya sea con la reflex o con mi movil; O bien leyendo un buen libro de fantasia medieval o distopia y si lleva la palabra Tolkien mucho mejor 🧝🏽‍♀️.",
      // "Mis habilidades técnicas van desde Diseño web responsive, HTML5, CSS, Javascript, Docker, React, Animaciones SVG, Suite Adobe (Photoshop, Illustrator, XD, Lightroom), Software de control de versiones (Git)"
    ]
  },
  {
    id: 2,
    name: "contacto",
    image: <Plane />,
    title: "Estemos en contacto!",
    content: [
      "¿Tienes alguna pregunta o propuesta?, escribeme y hazmela saber. ⊂(´･◡･⊂ )"
    ]
  }
];

export const SOCIAL = [
  {
    name: "Github",
    anchor: "https://github.com/bkaguilar"
  },
  {
    name: "Linkedin",
    anchor: "https://linkedin.com/in/bk-aguilar"
  },
  {
    name: "CodePen",
    anchor: "https://codepen.io/bkaguilar/pens/public/"
  },
  {
    name: "Instagram",
    anchor: "https://www.instagram.com/bk_aguilar/"
  }
];

export const SERVICES = [
  {
    name: "hola@bkaguilar.com",
    anchor:
      "mailto:hola@bkaguilar.com?subject=🤟🏽Hola Bessy, quiero proponerte algo"
  },
  {
    name: "Telegram",
    anchor: "https://t.me/bkaguilar"
  }
];

export const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
