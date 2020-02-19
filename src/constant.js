import React from "react";
import Anchor from "./components/Widgets/Anchor/Anchor";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Cover } from "./images/cover.svg";
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
    sectionName: "contact",
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
    name: "home",
    image: <Cover />,
    title: "Hello world, I'm Bessy",
    content: [
      "I am an Honduran frontend developer who created this landing page to show you how i made landing pages and rule you and bring you in the enlightenment behind it."
    ]
  },
  {
    id: 1,
    name: "personal",
    image: <Bike />,
    title: "About me",
    content: [
      "Self-taught developer, designer and photography lover who has been building for the web in some capacity since 2019.",
      "I currently have my residence in Zaragoza, Spain. I love the cinematography and the art behind a lens. I like travel, take pictures, occasionally read fantasy medieval and distopic storys, I'm a person very curious and straightforward.",
      "I like to craft solid and responsive products without sacrificing creativity."
    ]
  },
  {
    id: 2,
    name: "contact",
    image: <Plane />,
    title: "Let's work together",
    content: [
      "person.idea || person.proposal ? person.writeEmail() : 'Thanks you for passing bye. Have a nice day ⊂(´･◡･⊂ ).'"
      // "If you havie some idea or proposal let me now, ⊂(´･◡･⊂ )."
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

export const MESSAGE =
  "\n" +
  "Strong with you, the curiosity is...              \n" +
  "The curiosity is strong with this one...          \n" +
  "                       .-.                        \n" +
  "                      |_:_|                       \n" +
  "                     /(_Y_)\\                     \n" +
  ".                   ( \\/M\\/ )                   \n" +
  " '.               _.'-/'-'\\-'._                  \n" +
  "   ':           _/.--'[[[[]'--.\\                 \n" +
  "     ':        /_'  : |::'| :  '.\\               \n" +
  "       ':     //   ./ |oUU| \\.'  :\\             \n" +
  "         ':  _:'..' \\_|___|_/ :   :|             \n" +
  "           ':.  .'  |_[___]_|  :.':\\             \n" +
  "            [::\\ |  :  | |  :   ; : \\           \n" +
  "             '-'   \\/'.| |.' \\  .;.' |          \n" +
  "             |\\_    \\  '-'   :       |          \n" +
  "             |  \\    \\ .:    :   |   |          \n" +
  "             |   \\    | '.   :    \\  |          \n" +
  "             /       \\   :. .;       |           \n" +
  "            /     |   |  :__/     :  \\           \n" +
  "           |  |   |    \\:   | \\   |   ||        \n" +
  "          /    \\  : :  |:   /  |__|   /|         \n" +
  "          |     : : :_/_|  /'._\\  '--|_\\        \n" +
  "          /___.-/_|-'   \\  \\                    \n" +
  "                         '-'                      \n" +
  "Si quieres hablar sobre algun proyecto o tu empresa esta buscando a alguien con mis habilidades \n" +
  "que no son muchas de momento, pero son algunas(hola Jos <3) \n" +
  "escribeme: hola@bkaguilar.com  (ノ^o^)ノ ";

export const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
