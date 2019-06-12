import React, { Component } from 'react';

import ItemService from '../ItemService';

class EditItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            tag: '',
            servingSize: '',
            measure: '',
            carbs: ''
        };
        this.addItemService = new ItemService();
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.addItemService.fetchItemData(this.props.match.params.id, res => { console.log('Item retrieved'); })
        .then(res => {
            this.setState({ 
                item: res.data.item,
                tag: res.data.tag,
                servingSize: res.data.servingSize,
                measure: res.data.measure,
                carbs: res.data.carbs
            });
        })
        .catch( err => {
            console.log(err);
        });
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.updateItemData(this.state, this.props.match.params.id, res => {
            this.props.history.push('/all-items');
        })
        .catch( err => {
            console.log(err);
        });
    }

  render() {
    return (

        <div className='content-container'>
            <h2 className='content-header'>Edit Item</h2>
            <form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='item'>Item Name&#58;</label>
                    <input type='text' id='item' name='item' defaultValue={this.state.item} onChange={this.handleChange} />
                </div>
                <div className='form-row'>
                    <label htmlFor='tag'>Tag&#58;</label>
                    {/* <input type='text' id='tag' name='tag' defaultValue={this.state.tag} onChange={this.handleChange} /> */}
                    <select name='tag' onChange={this.handleChange}>
                        <option default value={this.state.tag}>{this.state.tag}</option>
                        <option value='fruit'>Fruit</option>
                        <option value='protein'>Protein</option>
                        <option value='vegetable'>Vegetable</option>
                        <option value='dessert'>Dessert</option>
                        <option value='misc'>Misc</option>
                    </select>
                </div>
                <div className='form-row'>
                    <label htmlFor='serving-size'>Serving Size&#58;</label>
                    <input type='number' id='serving-size' name='servingSize' defaultValue={this.state.servingSize} onChange={this.handleChange} />
                </div>
                <div className='form-row'>
                    <label htmlFor='calories'>Measure&#58;</label>
                    {/* <input type='text' id='calories' name='measure' defaultValue={this.state.measure} onChange={this.handleChange} /> */}
                    <select name='measure' onChange={this.handleChange}>
                        <option default value={this.state.measure}>{this.state.measure}</option>
                        <option value='g'>Grams</option>
                        <option value='oz'>Ounces</option>
                    </select>
                </div>
                <div className='form-row'>
                    <label htmlFor='carbs'>Carbs&#58;</label>
                    <input type='number' id='carbs' name='carbs' defaultValue={this.state.carbs} onChange={this.handleChange} />
                </div>
                <div>
                    <button className='form-submit-button' type='submit'>Update Item</button>
                </div>
            </form>
        </div>
    );
  }
}

export default EditItem;