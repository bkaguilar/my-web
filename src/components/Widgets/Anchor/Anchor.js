import React from "react";
import "./Anchor.scss";

class Anchor extends React.Component {
  render() {
    const { href, name, index, onClick, className, target } = this.props;
    return (
      <a
        href={href}
        target={target}
        index={index}
        name={name}
        title={name}
        className={"Anchor " + className}
        onClick={onClick}
      >
        {name}
      </a>
    );
  }
}

export default Anchor;
