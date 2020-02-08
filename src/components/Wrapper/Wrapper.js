import React from "react";
import { PAGES, SOCIAL, SERVICES, LOGO, MESSAGE } from "../../constant";
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
      isMenuVisible: false
    };
  }

  handleMovePointer(e) {
    let posX = e.clientX - 30;
    let posY = e.clientY - 30;
    this.pointer.style.transform = `translate3D(${posX}px, ${posY}px, 0)`;
  }

  moveToPage(n) {
    this.setState({
      active: this.state.active + n
    });
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

  componentDidMount() {
    setTimeout(console.log.bind(console, MESSAGE));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      // FIXME:
      window.scrollTo(0, 0);
    }
  }

  render() {
    let dots = PAGES.map((item, i) => {
      return (
        <Dot
          key={item.name}
          index={i}
          name={item.name}
          className={this.state.active === i ? " active" : ""}
          onClick={this.handleChange.bind(this)}
        />
      );
    });
    return (
      <div
        className={
          this.state.isMenuVisible || this.state.active === 0
            ? "Wrapper positionFixed"
            : "Wrapper"
        }
        onWheel={this.handleWheel.bind(this)}
        onKeyDown={this.handleKeydown.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        onMouseMove={this.handleMovePointer.bind(this)}
        data-theme={this.state.active % 2 === 1 ? "black-theme" : "white-theme"}
      >
        <Header
          {...this.state}
          onClick={this.handleChange.bind(this)}
          showMenu={this.handleShowMenu.bind(this)}
          logo={LOGO}
          pages={PAGES}
        />
        <Main
          {...this.state}
          pages={PAGES}
          onClick={this.movetoContact.bind(this)}
        />
        {this.state.active === PAGES.length - 1 && (
          <Footer
            servicesAnchors={SERVICES}
            socialAnchors={SOCIAL}
            logo={LOGO}
          />
        )}
        <ul className="dots">{dots}</ul>
        <section className="loading"></section>
        <span
          ref={pointer => (this.pointer = pointer)}
          className="pointer__circle"
        ></span>
      </div>
    );
  }
}

export default Wrapper;
