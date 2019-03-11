import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Navigate to...',
      menuVisible: false
    }
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  toggleMenuVisibility(){
    this.setState( prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  }

  render () {
    const handleMenuVisibility = () => {
      return this.state.menuVisible ? 'flex' : 'none';
    }

    return (
        <div className="nav-container">

          <button onClick={this.toggleMenuVisibility}>{this.state.activeLink}</button>

          <ul style={{display: handleMenuVisibility()}}>
            <li><Link to="/" name='Calculator' onClick={this.toggleMenuVisibility}>Calculator</Link></li>
            <li><Link to="/new-item" name='New Item' onClick={this.toggleMenuVisibility}>New Item</Link></li>
            <li><Link to="/all-items" name='Items' onClick={this.toggleMenuVisibility}>Items</Link></li>
            <li><Link to="/menu" name='Menu' onClick={this.toggleMenuVisibility}>Menu</Link></li>
          </ul>
        </div>
    )
  }

}

export default Navbar;
