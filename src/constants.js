import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Letter } from "./images/letter.svg";
import { ReactComponent as Cover } from "./images/cover.svg";
import { FormattedMessage } from "react-intl";

const ABOUT_PARAGRAPHS = 5;
const RESUME_WORK_DESCRIPTION = 6;

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
        site: "Torresburriel Estudio",
        description: [<FormattedMessage id="resume.work1.description" />]
      },
      {
        year: <FormattedMessage id="resume.work2.date" />,
        title: <FormattedMessage id="resume.work2.title" />,
        site: "Freelance",
        description: [<FormattedMessage id="resume.work2.description" />]
      },
      {
        year: <FormattedMessage id="resume.work3.date" />,
        title: <FormattedMessage id="resume.work3.title" />,
        site: "BaboonLab",
        description: Array(RESUME_WORK_DESCRIPTION)
          .fill()
          .map((p, index) => <FormattedMessage id={`resume.work3.description${index + 1}`} />)
      }
    ]
  }
];

export const RESUME_DATA = [
  {
    id: 0,
    sectionName: <FormattedMessage id="resume.contact" />,
    items: ["bkaguilar.com", "t.me/bkaguilar"]
  },
  {
    id: 1,
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
    id: 2,
    sectionName: <FormattedMessage id="resume.languages" />,
    items: [<FormattedMessage id="resume.spanish" />, <FormattedMessage id="resume.english" />]
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
    paragraphs: Array(ABOUT_PARAGRAPHS)
      .fill()
      .map((p, index) => <FormattedMessage id={`about.paragraph${index + 1}`} />)
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
