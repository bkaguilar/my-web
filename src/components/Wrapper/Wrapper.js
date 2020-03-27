import React from "react";
import {
  SECTIONS,
  PAGES,
  SOCIAL_LINKS,
  SERVICES_LINKS,
  LOGO,
  MESSAGE
} from "../../constants";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Dot from "../Widgets/Dot/Dot";

let lastTime = new Date().getTime();
let toucheStart, touchesEnd;

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      darkMode: false,
      isMenuVisible: false
    };
  }

  moveToPage(n) {
    this.setState({
      active: this.state.active + n
    });
    window.location.hash = SECTIONS[this.state.active];
  }

  movetoContact() {
    this.setState({
      active: 2
    });
  }

  handleChange(e) {
    this.setState({
      active: parseInt(e.currentTarget.attributes.index.value),
      isMenuVisible: false
    });
  }

  handleShowMenu() {
    if (window.innerWidth <= 768) {
      this.setState({
        isMenuVisible: !this.state.isMenuVisible
      });
    }
  }

  checkPage(activePage = this.state.active) {
    let top = window.scrollY;
    let offset = top + window.innerHeight + 0.5;
    let height = document.documentElement.offsetHeight;
    return [
      activePage < PAGES.length - 1 && offset >= height,
      activePage > 0 && top <= 0
    ];
  }

  handleWheel(e) {
    let time = new Date().getTime();
    let delta = e.deltaY || -e.wheelDelta || e.detail;
    if (time - lastTime < 400) return;
    lastTime = time;

    if (delta > 0 && this.checkPage()[0]) {
      this.moveToPage(1);
    } else if (delta < 0 && this.checkPage()[1]) {
      this.moveToPage(-1);
    }
  }

  handleKeydown(e) {
    if (e.key === "ArrowDown" && this.checkPage()[0]) {
      this.moveToPage(1);
    }
    if (e.key === "ArrowUp" && this.checkPage()[1]) {
      this.moveToPage(-1);
    }
  }

  handleTouchStart(e) {
    toucheStart = e.touches[0].pageY;
  }

  handleTouchEnd(e) {
    touchesEnd = e.changedTouches[0].pageY;
    if (this.state.isMenuVisible) return;
    if (touchesEnd - toucheStart > 80 && this.checkPage()[1]) {
      this.moveToPage(-1);
    }
    if (touchesEnd - toucheStart < -80 && this.checkPage()[0]) {
      this.moveToPage(1);
    }
  }

  handleChangeTheme() {
    this.setState({
      darkMode: !this.state.darkMode
    });
  }

  componentDidMount() {
    setTimeout(console.log.bind(console, MESSAGE));
    window.addEventListener("wheel", this.handleWheel.bind(this));
    window.addEventListener("keydown", this.handleKeydown.bind(this));
    window.addEventListener("touchend", this.handleTouchEnd.bind(this));
    window.addEventListener("touchstart", this.handleTouchStart.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 100);
    }
  }

  render() {
    let dots = SECTIONS.map((item, i) => {
      return (
        <Dot
          key={item}
          index={i}
          name={item}
          className={this.state.active === i ? " active" : ""}
          onClick={this.handleChange.bind(this)}
        />
      );
    });
    return (
      <div
        className={
          this.state.isMenuVisible || this.state.active === 0
            ? "positionFixed"
            : ""
        }
        data-theme={this.state.darkMode ? "black-theme" : "white-theme"}
      >
        <Header
          {...this.state}
          onClick={this.handleChange.bind(this)}
          showMenu={this.handleShowMenu.bind(this)}
          logo={LOGO}
          pages={PAGES}
          sections={SECTIONS}
        />
        <Main
          {...this.state}
          pages={PAGES}
          onClick={this.movetoContact.bind(this)}
        />
        {this.state.active === PAGES.length - 1 && (
          <Footer
            servicesAnchors={SERVICES_LINKS}
            socialAnchors={SOCIAL_LINKS}
            logo={LOGO}
          />
        )}
        <ul className="dots">{dots}</ul>
        <figure
          className="theme-icon"
          onClick={this.handleChangeTheme.bind(this)}
          title="Change theme"
          alt="icon for change theme"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 200 200"
            enableBackground="new 0 0 200 200"
          >
            <path
              className="theme-icon__sun"
              style={{
                transition: "all 200ms ease",
                fill: this.state.darkMode ? "white" : "#191919",
                d: this.state.darkMode
                  ? "path('M40,100a60,60 0 1,0 120,0a60,60 0 1,0 -120,0')"
                  : "path('M130,121.2c-26.9,0-48.7-21.8-48.7-48.7c0-16.4,8.1-30.9,20.5-39.7c-0.6,0-1.2,0-1.8,0c-37.1,0-67.2,30.1-67.2,67.2 c0,37.1,30.1,67.2,67.2,67.2c35.7,0,64.9-27.9,67.1-63.1C158.1,114.6,144.9,121.2,130,121.2z')"
              }}
            />
          </svg>
        </figure>
        <section className="loading"></section>
      </div>
    );
  }
}

export default Wrapper;
