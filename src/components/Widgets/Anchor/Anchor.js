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
      onHover
    } = this.props;
    return (
      <a
        href={href}
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
