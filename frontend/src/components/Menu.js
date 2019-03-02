import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';

import MenuItem from '../components/MenuItem';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ''
        };
        this.addItemService = new ItemService();
    }


    componentDidMount(){
        axios.get('http://localhost:4200/items/menu-items')
        .then( response => {
            this.setState({ items: response.data });
        })
        .catch( error => {
            console.log(error);
        });
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map( (object, i) => {
                return <MenuItem obj={object} key={i} />;
            });
        }
    }

    render(){
        return (
            <div className='content-container'>
                <h2 className='content-header'>Menu</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                        <label htmlFor='carbsDesired'>Total Carbs Desired&#58;</label>
                        <input type='number' id='carbsDesired' name='carbsDesired' onChange={this.handleChange} />
                    </div>
                </form>
                {this.tabRow()}
            </div>
        )
    }
}

export default Menu;