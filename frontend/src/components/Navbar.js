import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Navigate to...',
      menuVisible: false
    }
    this.handleNavSelection = this.handleNavSelection.bind(this);
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  handleNavSelection(e){
    let selected = e.target.name;
    this.setState ({
      menuVisible: false
    });
  }

  toggleMenuVisibility(){
    this.setState( prevState => ({
      menuVisible: true
    }));
  }


  render () {
    const handleMenuVisibility = () => {
      if(this.state.menuVisible) {
        return 'flex';
      } else {
        return 'none';
      }
    }

    return (
        <div className="nav-container">

          <button onClick={this.toggleMenuVisibility}>{this.state.activeLink}</button>

          <ul style={{display: handleMenuVisibility()}}>
            <li><Link to="/" name='Calculator' onClick={this.handleNavSelection}>Calculator</Link></li>
            <li><Link to="/new-item" name='New Item' onClick={this.handleNavSelection}>New Item</Link></li>
            <li><Link to="/all-items" name='Items' onClick={this.handleNavSelection}>Items</Link></li>
            <li><Link to="/menu" name='Menu' onClick={this.handleNavSelection}>Menu</Link></li>
          </ul>
        </div>
    )
  }

}

export default Navbar;
