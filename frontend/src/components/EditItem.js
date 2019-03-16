import React, { Component } from 'react';
import axios from 'axios';

import ItemService from '../components/ItemService';

class EditItem extends Component {

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

    componentDidMount(){
        axios.get('/items/'+this.props.match.params.id)
        .then(res => {
            console.log(res);
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
        })
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.updateData(this.state, this.props.match.params.id, res => {
            this.props.history.push('/');
        })
        .catch( err => {
            console.log(err);
        });
    }
    
    // handleSubmit(event) {
    // event.preventDefault();
    // this.addItemService.updateData(this.state, this.props.match.params.id)
    // .then( res => {
    //     this.setState({
    //     item: res.data.item,
    //     tag: res.data.tag,
    //     servingSize: res.data.servingSize,
    //     measure: res.data.measure,
    //     carbs: res.data.carbs
    //     }, () => {
    //     this.props.history.push('/');
    //     });
    // })
    // .catch( err => {
    //     console.log(err);
    // });
    // }

  render() {
    return (

        <div className='new-item-container'>
            <h2>Edit Item</h2>
            <form onSubmit={this.handleSubmit}>
            <div className='form-row'>
                <label htmlFor='item'>Item Name&#58;</label>
                <input type='text' id='item' name='item' value={this.state.item} />
            </div>
            <div className='form-row'>
                <label htmlFor='tag'>Tag&#58;</label>
                <input type='text' id='tag' name='tag' value={this.state.tag} />
            </div>
            <div className='form-row'>
                <label htmlFor='serving-size'>Serving Size&#58;</label>
                <input type='number' id='serving-size' name='servingSize' value={this.state.servingSize} />
            </div>
            <div className='form-row'>
                <label htmlFor='calories'>Measure&#58;</label>
                <input type='text' id='calories' name='measure' value={this.state.measure} />
            </div>
            <div className='form-row'>
                <label htmlFor='carbs'>Carbs&#58;</label>
                <input type='number' id='carbs' name='carbs' value={this.state.carbs} />
            </div>
            <div className='button'>
                <button type='submit'>Add Item</button>
            </div>
            </form>
        </div>
        //   <div className="container">
        //     <form onSubmit={this.handleSubmit}>
        //       <label>
        //         Edit Item:
        //         <input type="text" value={this.state.items.item}  className="form-control"/>
        //       </label><br/>
        //       <input type="submit" value="Update" className="btn btn-primary"/>
        //     </form>
        // </div>
    );
  }
}

export default EditItem;