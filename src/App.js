import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/button.js';
import Title from './components/title.js';
import Input from './components/input.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title color='success'>Welcome to React</Title>
          <Title danger>Normal i should say</Title>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
      </div>
    );
  }
}

export default App;
