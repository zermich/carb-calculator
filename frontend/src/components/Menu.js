import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';

import MenuItem from '../components/MenuItem';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            totalItemCarbs: 0
        };
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(value) {
        let currentCarbCount = (this.state.totalItemCarbs + value);
        this.setState({
            totalItemCarbs: currentCarbCount
        });
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map( (object, i) => {
                return <MenuItem obj={object} key={i} onChange={this.handleChange}/>;
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
                        <input type='number' id='carbsDesired' name='carbsDesired' />
                    </div>
                </form>
                {this.tabRow()}
                <h3>Current Carb Count is {this.state.totalItemCarbs}</h3>
                <h3>Total Carbs Remaining: </h3>
            </div>
        )
    }
}

export default Menu;