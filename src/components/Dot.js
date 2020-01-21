import React from "react";
import "./Dot.scss";

class Dot extends React.Component {
  render() {
    const { name, className } = this.props;
    return (
      <a href={"#" + name} className={"Dot " + className} title={name}></a>
    );
  }
}

export default Dot;
