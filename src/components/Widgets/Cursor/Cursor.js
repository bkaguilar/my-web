import React from "react";
import "./Cursor.scss";

class Cursor extends React.Component {
  render() {
    const transformCursor = {
      transform: `translate3D(${this.props.posX}px, ${this.props.posY}px, 0)`
    };
    return (
      <div className="Cursor">
        <span style={transformCursor} className="Cursor__dot"></span>
        <span style={transformCursor} className="Cursor__dot"></span>
      </div>
    );
  }
}

export default Cursor;
