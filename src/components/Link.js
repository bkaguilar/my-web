import React from "react";
import "./Link.scss";

class Link extends React.Component {
  render() {
    const { href, name, index, onClick, className, target } = this.props;
    return (
      <a
        href={href}
        target={target}
        index={index}
        name={name}
        className={className}
        onClick={onClick}
      >
        {name}
      </a>
    );
  }
}

export default Link;
