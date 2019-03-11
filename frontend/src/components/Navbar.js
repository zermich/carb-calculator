import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
      return this.state.menuVisible ? 'navbar-ul-visible' : 'navbar-ul-hidden';
    }

    return (
        <div className="nav-container">

          <button onClick={this.toggleMenuVisibility} id='nav-mobile-header'>Navigate To <i class="material-icons">keyboard_arrow_down</i></button>

          <ul className={handleMenuVisibility()}>
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
