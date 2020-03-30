import React from "react";
import "./Anchor.scss";

class Anchor extends React.Component {
  render() {
    const {
      href,
      name,
      value,
      title,
      index,
      onClick,
      className,
      target,
      onHover,
      id
    } = this.props;
    return (
      <a
        rel="noopener noreferrer"
        href={href}
        id={id}
        target={target}
        index={index}
        name={name}
        title={title}
        className={"Anchor " + className}
        onClick={onClick}
        onMouseOver={onHover}
      >
        {value}
      </a>
    );
  }
}

export default Anchor;
