import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <Router>
        <div className="nav-container">
          <ul>
            <li><Link to="/newitem">Add Item</Link></li>
            <li><Link to="/">Calculator</Link></li>
          </ul>
        </div>
      </Router>
    )
  }

}

export default Navbar;
