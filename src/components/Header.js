import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <figure>
          <Logo title="Bk Aguilar logo" />
        </figure>
      </header>
    );
  }
}

export default Header;
