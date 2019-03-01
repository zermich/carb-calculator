import React, { Component } from 'react';
import ItemService from './ItemService';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      tag: 'fruit',
      servingSize: 0,
      measure: 'g',
      carbs: 0
    };
    this.addItemService = new ItemService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.sendNewItemData(this.state, ()=> {this.props.history.push("/");});
  }


  render () {
    return (
      <div className='content-container'>
        <h2 className='content-header'>New Item</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label htmlFor='item'>Item Name&#58;</label>
            <input type='text' id='item' name='item' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='tag'>Tag&#58;</label>
            <select name='tag' onChange={this.handleChange}>
                <option value='fruit'>Fruit</option>
                <option value='protein'>Protein</option>
                <option value='vegetable'>Vegetable</option>
                <option value='dessert'>Dessert</option>
              </select>
            {/* <input type='text' id='tag' name='tag' onChange={this.handleChange} /> */}
          </div>
          <div className='form-row'>
            <label htmlFor='serving-size'>Serving Size&#58;</label>
            <input type='number' id='serving-size' name='servingSize' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='measure'>Measure&#58;</label>
            <select name='measure' onChange={this.handleChange}>
                <option value='g'>Grams</option>
                <option value='oz'>Ounces</option>
              </select>
            {/* <input type='text' id='measure' name='measure' onChange={this.handleChange} /> */}
          </div>
          <div className='form-row'>
            <label htmlFor='carbs'>Carbs&#58;</label>
            <input type='number' id='carbs' name='carbs' onChange={this.handleChange} />
          </div>
          <div>
            <button className='form-submit-button' type='submit' value='Submit'>Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem;
