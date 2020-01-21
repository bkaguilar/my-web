import React from "react";
import { ReactComponent as Portada } from "./images/portada.svg";
import { ReactComponent as Message } from "./images/message.svg";
import { ReactComponent as Nature } from "./images/nature.svg";
import Button from "./components/Button";

export const PAGES = [
  {
    name: "inicio",
    image: <Portada />,
    title: "Front end Developer.",
    button: (
      <Button
        type="button"
        className="Button__contact"
        value="Use me for free"
      />
    ),
    content:
      "Lately we all have been hearing a lot about “JavaScript Modules Everyone is likely wondering what to do with them, and how do they even play a vital role in our daily lives…?"
  },
  {
    name: "personal",
    image: <Nature />,
    title: "Over the past 9 years",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspe"
  },
  {
    name: "contacto",
    image: <Message />,
    title: "Send me a message!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspessss"
  }
];
