import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Portada } from "./images/portada2.svg";
import { ReactComponent as Bike } from "./images/bike.svg";
import { ReactComponent as Plane } from "./images/plane.svg";
import Button from "./components/Widgets/Button/Button";

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
    items: ["hola@bkaguilar.com", "bkaguilar.com", "t.me/bkaguilar"]
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
    id: 1,
    name: "personal",
    image: <Bike />,
    title: "Un poco sobre mi",
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
    anchor: "mailto:hola@bkaguilar.com"
  },
  {
    name: "Telegram",
    anchor: "https://t.me/bkaguilar"
  }
];

export const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
