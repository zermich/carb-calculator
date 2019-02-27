import React, { Component } from 'react';
import ItemService from '../components/ItemService';

class NewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      tag: '',
      servingSize: 0,
      measure: '',
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
      <div className='new-item-container'>
        <h2>New Item</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label htmlFor='item'>Item Name&#58;</label>
            <input type='text' id='item' name='item' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='tag'>Tag&#58;</label>
            <input type='text' id='tag' name='tag' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='serving-size'>Serving Size&#58;</label>
            <input type='number' id='serving-size' name='servingSize' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='calories'>Measure&#58;</label>
            <input type='text' id='calories' name='measure' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='carbs'>Carbs&#58;</label>
            <input type='number' id='carbs' name='carbs' onChange={this.handleChange} />
          </div>
          <div className='button'>
            <button type='submit' value='Submit'>Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewItem;
