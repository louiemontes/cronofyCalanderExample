import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cat from "./Cat";

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_FISHFACE);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cat />
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
