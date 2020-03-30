import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: ""
    };
  }

  componentDidMount() {
    this.setState({ lang: navigator.language.split(/[-_]/)[0] });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Wrapper {...this.state} />
            </Route>
            <Route path="/resume" exact>
              <Resume {...this.state} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
