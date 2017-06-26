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
        </div>
        <br /><br />
        <br /><br />
        <br /><br />
        <Button>Hello</Button>
        <br /><br />
        <Button primary/>
        <br /><br />
        <Button destructive />
        <br /><br />

      </div>
    );
  }
}

export default App;
