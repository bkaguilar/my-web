import React from "react";
import "./Dot.scss";

class Dot extends React.Component {
  render() {
    const { name, className } = this.props;
    return <li className={"Dot" + className} title={name}></li>;
  }
}

export default Dot;
