import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Wrapper />
            </Route>
            <Route path="/resume" exact>
              <Resume />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
