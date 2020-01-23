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
      isLoading: true
    };
  }

  nextPage(sign) {
    return this.setState({
      active: this.state.active + 1
    });
  }

  prevPage(sign) {
    return this.setState({
      active: this.state.active - 1
    });
  }

  handleChange(e) {
    this.setState({
      active: parseInt(e.currentTarget.attributes.index.value)
    });
  }

  handleWheel(e) {
    let time = new Date().getTime();
    if (time - lastTime < 400) return;
    lastTime = time;

    if (e.deltaY > 1 && this.state.active + 1 < PAGES.length) {
      this.nextPage();
    } else if (e.deltaY < -1 && this.state.active >= 1) {
      this.prevPage();
    }
  }

  handleKeydown(e) {
    if (e.keyCode === 40 && this.state.active + 1 < PAGES.length) {
      this.nextPage();
    }
    if (e.keyCode === 38 && this.state.active >= 1) {
      this.prevPage();
    }
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          isLoading: false
        });
      }.bind(this),
      1200
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.active !== prevState.active) {
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
          logo={LOGO}
          pages={PAGES}
        />
        <Main actives={this.state.active} pages={PAGES} />
        {this.state.isLast && (
          <Footer servicesLinks={SERVICES} socialLinks={SOCIAL} logo={LOGO} />
        )}
        <ul className="dots">{dot}</ul>
        {this.state.isLoading && <section className="loading"></section>}
      </div>
    );
  }
}

export default App;
