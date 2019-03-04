import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCarbsDesired: 0,
      idealWeight: 'Pending Calculation'
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculateWeight = this.calculateWeight.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let myNum = e.target.value;
    this.setState({
      itemCarbsDesired: parseInt(myNum)
    })
  }

  

  calculateWeight() {
    let y = this.props.obj.servingSize;
    let z = this.props.obj.carbs;
    let x = this._newDesiredCarbs.value;
    let n = ((y*x)/z).toFixed(2);
    this.setState ({
       idealWeight: `${n}g`
    });
    this.props.onChange(this.state.itemCarbsDesired);
  }


  render () {
    const handleBackgroundColor = a => { 
      switch(a){   
          case 'protein': return "rgba(255, 0, 0, .6)";
          case 'fruit': return "rgba(255, 255, 0, .6)";
          case 'vegetable': return "rgba(0, 128, 0, .6)";
          case 'misc': return "rgba(48, 151, 245, .6)";
          default: return "rgba(48, 151, 245, .6)";      
      }
    }
    return (
      <div className='menu-item' style={{background: handleBackgroundColor(this.props.obj.tag)}} >
        <h2>{this.props.obj.tag}: {this.props.obj.item}</h2>
        <form>
          <div className='form-row'>
            <label>Item Carbs Desired:</label>
            <input type='number' id='desired-carbs' name='item-desired-carbs' ref={input => this._newDesiredCarbs = input} onChange={this.handleChange} />
          </div>
        </form>
        <div>
          <button className='form-submit-button' onClick={this.calculateWeight}>Calculate</button>
        </div>
        <p>Ideal Weight&#58; {this.state.idealWeight} {this.state.measure}</p>

      </div>
    )
  }
}

export default MenuItem;