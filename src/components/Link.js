import React from "react";
import "./Link.scss";

class Link extends React.Component {
  render() {
    const { name, index, onClick, className } = this.props;
    return (
      <a
        href={"#" + name}
        index={index}
        name={name}
        className={"App__header__nav__item " + className}
        onClick={onClick}
      >
        {name}
      </a>
    );
  }
}

export default Link;
