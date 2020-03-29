import React from "react";
import Anchor from "./components/Widgets/Anchor/Anchor";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Letter } from "./images/letter.svg";
import { ReactComponent as Cover } from "./images/cover.svg";
import { FormattedMessage } from "react-intl";

const changeTextLanguage = (enText, esText) => {
  let language = navigator.language.split(/[-_]/)[0];
  return language === "en" ? enText : esText;
};

export const DARK_MODE_OFF_TITLE = changeTextLanguage(
  "Enable Dark Mode",
  "Activar Modo Oscuro"
);

export const DARK_MODE_ON_TITLE = changeTextLanguage(
  "Disable Dark Mode",
  "Desactivar Modo Oscuro"
);

export const EMAIL_COPY_TITLE = changeTextLanguage(
  "Copy to clipboard",
  "Copiar al portapapeles"
);

export const EMAIL_TITLE = changeTextLanguage(
  "Email copied!",
  "¡Email copiado!"
);

export const PDF_LANG = changeTextLanguage("en", "es");

export const RESUME_PROFILE = [
  {
    id: 1,
    sectionName: <FormattedMessage id="resume.education" />,
    items: [
      {
        year: "2007 - 2009",
        title: <FormattedMessage id="resume.education.title1" />,
        site: "INTAE, San Pedro Sula, Honduras"
      },
      {
        year: "2010 - 2013",
        title: <FormattedMessage id="resume.education.title2" />,
        site: "Universidad de San Pedro Sula, Honduras"
      }
    ]
  },

  {
    id: 2,
    sectionName: <FormattedMessage id="resume.experience" />,
    items: [
      {
        year: <FormattedMessage id="resume.work1.date" />,
        title: <FormattedMessage id="resume.work1.title" />,
        site: "Freelance",
        description: [<FormattedMessage id="resume.work1.description" />]
      },
      {
        year: <FormattedMessage id="resume.work2.date" />,
        title: <FormattedMessage id="resume.work2.title" />,
        site: "BaboonLab",
        description: [
          <FormattedMessage id="resume.work2.description1" />,
          <FormattedMessage id="resume.work2.description2" />,
          <FormattedMessage id="resume.work2.description3" />,
          <FormattedMessage id="resume.work2.description4" />,
          <FormattedMessage id="resume.work2.description5" />,
          <FormattedMessage id="resume.work2.description6" />
        ]
      }
    ]
  }
];

export const RESUME_DATA = [
  {
    sectionName: <FormattedMessage id="resume.contact" />,
    items: [
      <Anchor
        href={
          "mailto:" +
          changeTextLanguage("hello@bkaguilar.com", "hola@bkaguilar.com")
        }
        name={changeTextLanguage("hello@bkaguilar.com", "hola@bkaguilar.com")}
        value={changeTextLanguage("hello@bkaguilar.com", "hola@bkaguilar.com")}
        className="Anchor--resume"
      />,
      <Anchor
        href="bkaguilar.com"
        name="bkaguilar.com"
        value="bkaguilar.com"
        className="Anchor--resume"
      />,
      <Anchor
        href="t.me/bkaguilar"
        name="t.me/bkaguilar"
        value="t.me/bkaguilar"
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
      "JavaScript (ES6 / jQuery)",
      "React",
      "Adobe Illustrator / Photoshop / XD / Lightroom",
      "WordPress",
      "Linux (Ubuntu)",
      "Git",
      "Docker",
      "Node.js",
      "Jest",
      "JIRA"
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
    name: changeTextLanguage("hello@bkaguilar.com", "hola@bkaguilar.com"),
    anchor: "mailto:hola@bkaguilar.com?subject=🤟🏽Hola Bessy..."
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
  "hello@bkaguilar.com  (ノ^o^)ノ ";

export const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;

export const DARK_MODE_ICON_PATH =
  "M130,121.2c-26.9,0-48.7-21.8-48.7-48.7c0-16.4,8.1-30.9,20.5-39.7c-0.6,0-1.2,0-1.8,0c-37.1,0-67.2,30.1-67.2,67.2 c0,37.1,30.1,67.2,67.2,67.2c35.7,0,64.9-27.9,67.1-63.1C158.1,114.6,144.9,121.2,130,121.2z";
