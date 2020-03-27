import React from "react";
import "./Button.scss";

class Button extends React.Component {
  render() {
    const { type, onClick, className, value, emoji } = this.props;
    return (
      <button type={type} onClick={onClick} className={"Button " + className}>
        {value}
        {emoji && (
          <span className="emoji" role="img" alt="arrow" aria-label="arrow">
            {emoji}
          </span>
        )}
      </button>
    );
  }
}

export default Button;
