import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
        <div className="nav-container">
          <ul>
            <li><Link to="/">Calculator</Link></li>
            <li><Link to="/new-item">New Item</Link></li>
            <li><Link to="/all-items">Items</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </div>
    )
  }

}

export default Navbar;
