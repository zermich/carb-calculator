import React, { Component } from 'react';
import './App.css';
import Navbar from 'Navbar';
import Contentbox from 'Contentbox';

class App extends Component {
  render() {
    return (
      <div id="background">
        <Contentbox />
      </div>
    );
  }
}

export default App;
