import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getNewURL() {
    axios.post('/api/new', {
      url: "hello"
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response.data);
  });

  }

  componentDidMount() {
    this.getNewURL();
  }
 
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
