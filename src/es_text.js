import React from "react";
import Anchor from "./components/Widgets/Anchor/Anchor";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Letter } from "./images/letter.svg";
import { ReactComponent as Cover } from "./images/cover.svg";

export const RESUME_PROFILE = [
  {
    id: 1,
    sectionName: "Educación",
    year: "2007 - 2009",
    title: "Técnico en computación",
    site: "INTAE, San Pedro Sula, Honduras"
  },
  {
    id: 2,
    sectionName: "Experiencia laboral",
    year: "Marzo 2019 - Septiembre 2019",
    title: "Diseñadora web",
    site: "BaboonLab",
    description:
      "Developed the frontend infrastructure and designed the different applications of the company, helped with the development in PHP language helping me with the symfony framework."
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
      "Suite Adobe(Illustrator, Photoshop, XD, Lightroom)",
      "HTML5",
      "CSS3",
      "Animaciones SVG",
      "Control de versiones GIT",
      "Javascript",
      "NodeJS",
      "React",
      "Jest",
      "Docker"
    ]
  },
  {
    sectionName: "Idiomas",
    items: ["Español (materno)", "Inglés (intermedio)"]
  }
];

export const PAGES = [
  {
    id: 0,
    name: "inicio",
    image: <Cover />,
    title: "Hola mundo, mi nombre es Bessy",
    content:
      "I am an Honduran frontend developer who created this web page to show you how i made web pages."
  },
  {
    id: 1,
    name: "personal",
    title: "About me",
    subTitle: "A little about me and my background",
    content:
      "Self-taught developer, designer and photography lover who has been building for the web since 2019.",
    paragraphs: [
      "I currently have my residence in Zaragoza, Spain. Love the cinematography and the art behind a lens; quite appreciate a well done and peculiar scene, occasionally read fantasy medieval and distopic storys, I'm a person very curious and straightforward.",
      "Outside of my work I like to travelling and getting out with my camera. I shoot with a Nikon D3200 and a 18-55mm lens, and sometimes just my phone.",
      "Always keeping learning and keep abreast of new technological advances; Like to craft solid and responsive products without sacrificing creativity. Design quality, user-friendly and scalable products regardless of stack.",
      "I'm now available for contracts and remote full-time roles."
    ]
  },
  {
    id: 2,
    name: "contact",
    image: <Letter />,
    title: "Let's work together",
    content: "If you have some idea or proposal let me now, ⊂(´･◡･⊂ )."
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
  "If you want to talk with me about an idea or your company is looking \n" +
  "for someone with my skills let chat...\n" +
  "hola@bkaguilar.com  (ノ^o^)ノ ";

export const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
