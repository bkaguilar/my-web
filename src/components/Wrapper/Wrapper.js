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

  // // FIXME:
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
    setTimeout(
      console.log(
        "\n" +
          "Strong with you the curiosity is....              \n" +
          "                       .-.                        \n" +
          "                      |_:_|                       \n" +
          "                     /(_Y_)\\                     \n" +
          ".                   ( \\/M\\/ )                   \n" +
          " '.               _.'-/'-'\\-'._                  \n" +
          "   ':           _/.--'[[[[]'--.\\                 \n" +
          "     ':        /_'  : |::'| :  '.\\               \n" +
          "       ':     //   ./ |oUU| \\.'  :\\             \n" +
          "         ':  _:'..' \\_|___|_/ :   :|             \n" +
          "           ':.  .'  |_[___]_|  :.':\\             \n" +
          "            [::\\ |  :  | |  :   ; : \\           \n" +
          "             '-'   \\/'.| |.' \\  .;.' |          \n" +
          "             |\\_    \\  '-'   :       |          \n" +
          "             |  \\    \\ .:    :   |   |          \n" +
          "             |   \\    | '.   :    \\  |          \n" +
          "             /       \\   :. .;       |           \n" +
          "            /     |   |  :__/     :  \\           \n" +
          "           |  |   |    \\:   | \\   |   ||        \n" +
          "          /    \\  : :  |:   /  |__|   /|         \n" +
          "          |     : : :_/_|  /'._\\  '--|_\\        \n" +
          "          /___.-/_|-'   \\  \\                    \n" +
          "                         '-'                      \n" +
          "Si quieres hablar sobre algun proyecto o tu empresa esta buscando a alguien con mis habilidades \n" +
          "que no son muchas de momento, pero son algunas(hola Jos <3) \n" +
          "escribeme: hola@bkaguilar.com  (ノ^o^)ノ "
      )
      // console.log.bind(
      //   console,
      //   `%c(ノ^o^)ノ~ HELLO WORLD!!!! y JOS lo puedo hacer mejor, asi que sientete libre de darme un toque a hola@bkaguilar.com`,
      //   "padding: 10px; line-height: -2em"
      // )
    );
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
        className={
          this.state.isMenuVisible || this.state.active === 0
            ? "Wrapper positionFixed"
            : "Wrapper"
        }
        onWheel={this.handleWheel.bind(this)}
        onKeyDown={this.handleKeydown.bind(this)}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
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
