import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { PAGES, SOCIAL, SERVICES } from "./constant";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Dot from "./components/Dot";
import "./App.scss";

let lastTime = new Date().getTime();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      isLast: false,
      isVisible: false,
      isScroll: false
    };
  }

  moveToPage(n) {
    return this.setState({
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
    if (e.deltaY > 1 && this.state.active + 1 < PAGES.length) {
      this.moveToPage(1);
    } else if (e.deltaY < -1 && this.state.active >= 1) {
      this.moveToPage(-1);
    }
  }

  handleRemove(e) {
    let top = document.documentElement.scrollTop;
    let offset = top + window.innerHeight;
    let height = document.documentElement.offsetHeight;

    if ((top <= 0 && e.deltaY < -1) || (offset === height && e.deltaY > 1)) {
      this.setState({
        isScroll: false
      });
    }
  }

  handleKeydown(e) {
    if (e.keyCode === 40 && this.state.active + 1 < PAGES.length) {
      this.moveToPage(1);
    }
    if (e.keyCode === 38 && this.state.active >= 1) {
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

      if (document.documentElement.offsetHeight > window.innerHeight) {
        console.log("im in");
        this.setState({
          isScroll: true
        });
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
        onWheel={
          this.state.isScroll
            ? this.handleRemove.bind(this)
            : this.handleWheel.bind(this)
        }
        onKeyDown={
          this.state.isScroll
            ? this.handleRemove.bind(this)
            : this.handleKeydown.bind(this)
        }
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
