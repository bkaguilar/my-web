import React from "react";
import "./Cursor.scss";

class Cursor extends React.Component {
  render() {
    const transformCursor = {
      transform: `translate3D(${this.props.posX}px, ${this.props.posY}px, 0)`
    };
    return <span style={transformCursor} className="Cursor"></span>;
  }
}

export default Cursor;
