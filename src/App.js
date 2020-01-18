import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const pages = ["inicio", "personal", "contacto"];
  return (
    <div className="App">
      <Header pages={pages} />
      {pages.map(item => {
        return <Section className={item} />;
      })}
    </div>
  );
}

export default App;
