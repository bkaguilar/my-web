import React from "react";
import Anchor from "./components/Widgets/Anchor/Anchor";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Letter } from "./images/letter.svg";
import { ReactComponent as Cover } from "./images/cover.svg";
import { FormattedMessage } from "react-intl";

export const RESUME_PROFILE = [
  {
    id: 1,
    sectionName: <FormattedMessage id="resume.education" />,
    year: "2007 - 2009",
    title: <FormattedMessage id="resume.education.title" />,
    site: "INTAE, San Pedro Sula, Honduras"
  },
  {
    id: 2,
    sectionName: <FormattedMessage id="resume.experience" />,
    year: <FormattedMessage id="resume.work.date" />,
    title: <FormattedMessage id="resume.work.title" />, // sure? why Designer, if you were using Docker, tweaking TWIG templates and so... shouldn't be fucking frontend developer the role? that's the offering you applied for!
    site: "BaboonLab",
    description: <FormattedMessage id="resume.work.description" />
  }
];

export const RESUME_DATA = [
  {
    sectionName: <FormattedMessage id="resume.contact" />,
    items: [
      <Anchor
        href="mailto:hola@bkaguilar.com"
        name="hola@bkaguilar.com"
        value="hola@bkaguilar.com"
        target="__blank"
        className="Anchor--resume"
      />,
      <Anchor
        href="bkaguilar.com"
        name="bkaguilar.com"
        value="bkaguilar.com"
        target="__blank"
        className="Anchor--resume"
      />,
      <Anchor
        href="t.me/bkaguilar"
        name="t.me/bkaguilar"
        value="t.me/bkaguilar"
        target="__blank"
        className="Anchor--resume"
      />
    ]
  },
  {
    sectionName: <FormattedMessage id="resume.skills" />,
    items: [
      "HTML5",
      "CSS3",
      <FormattedMessage id="resume.skills.svg" />,
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
    sectionName: <FormattedMessage id="resume.languages" />,
    items: [
      <FormattedMessage id="resume.spanish" />,
      <FormattedMessage id="resume.english" />
    ]
  }
];

export const SECTIONS = ["home", "personal", "contact"];

export const PAGES = [
  {
    id: 0,
    name: <FormattedMessage id="home.name" />,
    image: <Cover />,
    title: <FormattedMessage id="home.title" />,
    content: <FormattedMessage id="home.content" />
  },
  {
    id: 1,
    name: <FormattedMessage id="about.name" />,
    title: <FormattedMessage id="about.title" />,
    subTitle: <FormattedMessage id="about.subtitle" />,
    content: <FormattedMessage id="about.content" />,
    paragraphs: [
      <FormattedMessage id="about.paragraph1" />,
      <FormattedMessage id="about.paragraph2" />,
      <FormattedMessage id="about.paragraph3" />,
      <FormattedMessage id="about.paragraph4" />
    ]
  },
  {
    id: 2,
    name: <FormattedMessage id="contact.name" />,
    image: <Letter />,
    title: <FormattedMessage id="contact.title" />,
    content: <FormattedMessage id="contact.content" />
  }
];

export const SOCIAL_LINKS = [
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

export const SERVICES_LINKS = [
  {
    name: "hola@bkaguilar.com",
    anchor: <FormattedMessage id="servicesLinks.anchor" />
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
