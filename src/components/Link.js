import React from "react";
import "./Link.scss";

class Link extends React.Component {
  render() {
    const { title, index, onClick, className } = this.props;
    return (
      <a
        href={"#" + title}
        index={index}
        title={title}
        className={"App__header__nav__item " + className}
        onClick={onClick}
      >
        {title}
      </a>
    );
  }
}

export default Link;
