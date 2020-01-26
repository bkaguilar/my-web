import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { PAGES, SOCIAL, SERVICES } from "./constant";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Dot from "./components/Widgets/Dot/Dot";
import "./App.scss";

let lastTime = new Date().getTime();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      isLast: false,
      isVisible: false
    };
  }

  moveToPage(n) {
    console.log(
      "estamos en pagina " +
        this.state.active +
        " y movemos a " +
        (this.state.active + n)
    );
    // window.scrollTo(0, 0);
    this.setState({
      active: this.state.active + n
    });
  }

  handleChange(e) {
    this.setState({
      active: parseInt(e.currentTarget.attributes.index.value)
    });
  }

  handleShowMenu() {
    if (window.innerWidth <= 768) {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  }

  handleWheel(e) {
    let time = new Date().getTime();
    if (time - lastTime < 400) return;
    lastTime = time;

    let top = window.scrollY;
    let offset = top + window.innerHeight;
    let height = document.documentElement.offsetHeight;
    const activePage = this.state.active;

    if (
      e.deltaY > 0 &&
      (activePage === 0 || (activePage + 1 < PAGES.length && offset >= height))
    ) {
      this.moveToPage(1);
    } else if (e.deltaY < 0 && activePage > 0 && top <= 0) {
      this.moveToPage(-1);
    }
  }

  handleKeydown(e) {
    console.log("estamos en handleKeydown()");
    console.log(e.key);
    if (e.key === "ArrowDown" && this.state.active + 1 < PAGES.length) {
      this.moveToPage(1);
    }
    if (e.key === "ArrowUp" && this.state.active >= 1) {
      this.moveToPage(-1);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
      this.setState({
        isVisible: false
      });
      if (this.state.active % 2 === 1) {
        document.body.setAttribute("data-theme", "black-theme");
      } else {
        document.body.setAttribute("data-theme", "white-theme");
      }

      if (this.state.active === PAGES.length - 1) {
        this.setState({
          isLast: true
        });
      } else {
        this.setState({
          isLast: false
        });
      }
    }
  }

  render() {
    const LOGO = <Logo title="Bk Aguilar logo" className="Logo" />;
    let dot = PAGES.map((item, i) => {
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
        className="App"
        onWheel={this.handleWheel.bind(this)}
        onKeyDown={this.handleKeydown.bind(this)}
      >
        <Header
          active={this.state.active}
          onClick={this.handleChange.bind(this)}
          onClickResponsive={this.handleShowMenu.bind(this)}
          isVisible={this.state.isVisible}
          logo={LOGO}
          pages={PAGES}
        />
        <Main active={this.state.active} pages={PAGES} />
        {this.state.isLast && (
          <Footer servicesLinks={SERVICES} socialLinks={SOCIAL} logo={LOGO} />
        )}
        <ul className="dots">{dot}</ul>
        <section className="loading"></section>
      </div>
    );
  }
}

export default App;
