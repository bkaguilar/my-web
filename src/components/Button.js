import React from "react";
import "./Button.scss";

class Button extends React.Component {
  render() {
    const { type, onClick, className, value } = this.props;
    return (
      <button type={type} onClick={onClick} className={"Button " + className}>
        {value}
      </button>
    );
  }
}

export default Button;
