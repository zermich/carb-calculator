import React, { Component } from 'react';
import './App.css';
import Contentbox from 'Contentbox';

class App extends Component {
  state= {
    users: []
  };

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
      <div id="background">
          <Contentbox />
      </div>
    );
  }
}

export default App;
