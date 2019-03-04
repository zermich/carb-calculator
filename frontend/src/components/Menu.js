import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';

import MenuItem from '../components/MenuItem';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            carbsDesired: 0,
            totalItemCarbs: 0,
            carbsRemaining: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCarbsDesired = this.handleChangeCarbsDesired.bind(this);
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

    handleChangeCarbsDesired(e) {
        e.preventDefault();
        let myNum = e.target.value;
        this.setState({
          carbsDesired: parseInt(myNum)
        })
      }

    handleChange(value) {
        let currentCarbCount = (this.state.totalItemCarbs + value);
        this.setState({
            totalItemCarbs: currentCarbCount,
            carbsRemaining: (this.state.carbsDesired - currentCarbCount)
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
                <div id='total-carbs-desired-form'>
                    Total Carbs Desired&#58; 
                    <input type='number' id='carbsDesired' name='carbsDesired' onChange={this.handleChangeCarbsDesired}/>
                </div> 
                {this.tabRow()}
                <h3>Total Carbs Remaining: {this.state.carbsRemaining}</h3>
            </div>
        )
    }
}

export default Menu;