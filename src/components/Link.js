import React from "react";
import "./Link.scss";

class Link extends React.Component {
  render() {
    return (
      <a
        href={"#" + this.props.title}
        index={this.props.index}
        title={this.props.title}
        className={"header__nav__item " + this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.title}
      </a>
    );
  }
}

export default Link;
