import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idealWeight: 'Pending Calculation'
    }
    this.calculateWeight = this.calculateWeight.bind(this);
  }

  calculateWeight() {
    let y = this._newServing.value;
    let z = this._newCarbs.value;
    let x = this._newDesiredCarbs.value;
    let n = ((y*x)/z).toFixed(2);
    this.setState ({
       idealWeight: `${n}g`
     });
  }


  render () {
    return (
      <div className='menu-item'>
        <h2>{this.props.obj.tag}: {this.props.obj.item}</h2>
        <form>
          <div className='form-row'>
            <label>Item Carbs Desired:</label>
            <input type='number' id='desired-carbs' name='item-desired-carbs' ref={input => this._newDesiredCarbs = input}/>
          </div>
        </form>
        <div>
          <button className='form-submit-button' onClick={this.calculateWeight}>Calculate</button>
        </div>
        <p>Ideal Weight&#58; {this.state.idealWeight}</p>

      </div>
    )
  }
}

export default MenuItem;