import React, { Component } from 'react';

import Contentbox from '../containers/Contentbox';
import Navbar from '../components/Navbar';


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
