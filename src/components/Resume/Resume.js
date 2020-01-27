import React from "react";
import "./Resume.scss";

class Resume extends React.Component {
  render() {
    const { type, onClick, className, value } = this.props;
    return (
      <main>
        <aside></aside>
        <article></article>
      </main>
    );
  }
}

export default Resume;
