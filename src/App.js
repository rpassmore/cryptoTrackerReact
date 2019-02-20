import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import BitCoinList from "./components/BitCoinList";

class App extends Component {
  render() {
    return (
        <div className="App">
        <div>
          <NavBar/>
          <BitCoinList/>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
