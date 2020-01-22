import React from "react";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Button from "./components/Button";

export const PAGES = [
  {
    name: "inicio",
    image: <Portada />,
    title: "Hola mi nombre es Bessy.",
    button: (
      <Button
        type="button"
        className="Button__contact"
        value="Use me for free"
      />
    ),
    content:
      "I like to craft solid and scalable FE products with great user experiences."
  },
  {
    name: "personal",
    image: <Nature />,
    title: "Over the past 9 years",
    content:
      "I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable. In building JavaScript applications and solid infrastructure, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, definitive solutions optimized for scale — performance and scalabilty are priorities on my radar."
  },
  {
    name: "contacto",
    image: <Message />,
    title: "Send me a message!",
    content: "Got a question or proposal, or just want to say hello? Go ahead."
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
