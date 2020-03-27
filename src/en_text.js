import React from "react";
import Anchor from "./components/Widgets/Anchor/Anchor";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Letter } from "./images/letter.svg";
import { ReactComponent as Cover } from "./images/cover.svg";

export const RESUME_PROFILE = [
  {
    id: 1,
    sectionName: "Education",
    year: "2007 - 2009",
    title: "Computer Technician",
    site: "INTAE, San Pedro Sula, Honduras"
  },
  {
    id: 2,
    sectionName: "Work Experience",
    year: "March 2019 - September 2019",
    title: "Web Designer", // sure? why Designer, if you were using Docker, tweaking TWIG templates and so... shouldn't be fucking frontend developer the role? that's the offering you applied for!
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
        href="mailto:hola@bkaguilar.com?subject=🤟🏽Hi Bessy..."
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
    sectionName: "Skills",
    items: [
      "HTML5",
      "CSS3",
      "SVG Animations",
      "JavaScript / ES6",
      "React",
      "Adobe Illustrator / Photoshop / XD / Lightroom",
      "WordPress",
      "Git",
      "Docker",
      "Node.js",
      "Jest"
    ]
  },
  {
    sectionName: "Languages",
    items: ["Spanish (Native)", "English (Professional working proficiency)"]
  }
];

export const PAGES = [
  {
    id: 0,
    name: "home",
    image: <Cover />,
    title: "Hello world, I'm Bessy",
    content:
      "I'm an Honduran frontend developer, always learning and looking for opportunities."
  },
  {
    id: 1,
    name: "personal",
    title: "About me",
    subTitle: "A little about me and my background",
    content:
      "Self-taught developer, designer and photography lover who has been building for the web since 2019.",
    paragraphs: [
      "I currently live in Zaragoza, Spain. Love the cinematography and the art behind a len (I really appreciate a well done and peculiar scene). Occasionally read medieval fantasy and dystopic literature. And I'm a very curious person.",
      "Outside of my work I like to travel and going out with my camera. I shoot with a Nikon D3200, and sometimes just with my phone.",
      "Always learning and keeping abreast of new technologies. Love to craft solid and responsive products without sacrificing creativity. Design quality, user-friendly and scalable products regardless of the tech stack.",
      "I'm interested in full or part-time remote jobs but also available as a contractor."
    ]
  },
  {
    id: 2,
    name: "contact",
    image: <Letter />,
    title: "Let's work together",
    content: "If you have some idea or proposal, let me now, ⊂(´･◡･⊂ )."
  }
];

export const SOCIAL = [
  {
    name: "GitHub",
    anchor: "https://github.com/bkaguilar"
  },
  {
    name: "LinkedIn",
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
    anchor: "mailto:hola@bkaguilar.com?subject=🤟🏽Hi Bessy..."
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
  "If you want to talk with me about some idea or your company is looking \n" +
  "for someone with my skills we can chat...\n" +
  "hola@bkaguilar.com  (ノ^o^)ノ ";

export const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
