import React from "react";
import "./Cursor.scss";

class Cursor extends React.Component {
  render() {
    const transformCursor = {
      top: this.props.posY,
      left: this.props.posX
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
