import React from "react";
import { ReactComponent as Illustration } from "../images/portada.svg";
import "./Section.scss";

class Section extends React.Component {
  render() {
    return (
      <section>
        <figure>
          <Illustration />
        </figure>
      </section>
    );
  }
}

export default Section;
