import React, { Component } from 'react';
import Calculator from 'Calculator';

class Contentbox extends Component {
  render() {
    return (
      <div className="contentbox-wrapper">
        <h1>Carb Calculator</h1>
        <div className="contentbox">
          <Calculator />
        </div>
      </div>
    )
  }
}

export default Contentbox
