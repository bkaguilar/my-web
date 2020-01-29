import React from "react";
import { PAGES, SOCIAL, SERVICES, LOGO } from "../../constant";
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
      isLast: false,
      isMenuVisible: false
    };
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
    let offset = top + window.innerHeight;
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

    console.log(touchesEnd - toucheStart);

    if (touchesEnd - toucheStart > 60 && this.checkPage()[1]) {
      this.moveToPage(-1);
    }
    if (touchesEnd - toucheStart < -60 && this.checkPage()[0]) {
      this.moveToPage(1);
    }
  }
  // FIXME:
  showElements() {
    const texts = document.querySelectorAll(".Main__text__content");
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("showAnimation");
        } else {
          entry.target.classList.remove("showAnimation");
        }
      });
    });
    texts.forEach(text => {
      observer.observe(text);
    });
  }

  componentDidMount() {
    this.showElements();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      this.showElements();
      // FIXME:
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 500);
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
        className="Wrapper"
        onWheel={this.handleWheel.bind(this)}
        onKeyDown={this.handleKeydown.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        data-theme={this.state.active % 2 === 1 ? "black-theme" : "white-theme"}
        style={{
          position: this.state.isMenuVisible ? "fixed" : ""
        }}
      >
        <Header
          {...this.state}
          onClick={this.handleChange.bind(this)}
          showMenu={this.handleShowMenu.bind(this)}
          logo={LOGO}
          pages={PAGES}
        />
        <Main
          active={this.state.active}
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
      </div>
    );
  }
}

export default Wrapper;
