import React from "react";
import "./Dot.scss";

class Dot extends React.Component {
  render() {
    const { name, className, onClick, index } = this.props;
    return (
      <li
        index={index}
        className={"Dot" + className}
        title={name}
        onClick={onClick}
        aria-label={"dot " + name}
      ></li>
    );
  }
}

export default Dot;
