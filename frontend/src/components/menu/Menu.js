import React, { Component } from 'react';

import ItemService from '../ItemService';
import MenuItem from '../menu-item/MenuItem';

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
        this.handleDelete = this.handleDelete.bind(this);
        this.clearMenu = this.clearMenu.bind(this);
        this.addItemService = new ItemService();
    }


    componentDidMount(){
        this.addItemService.fetchMenuItems()
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
          carbsDesired: parseInt(myNum),
          carbsRemaining: (parseInt(myNum) - this.state.totalItemCarbs)
        })
      }

    handleChange(value) {
        let currentCarbCount = (this.state.totalItemCarbs + value);
        this.setState({
            totalItemCarbs: currentCarbCount,
            carbsRemaining: (this.state.carbsDesired - currentCarbCount)
        });
    }

    handleDelete(){
        this.addItemService.fetchMenuItems()
        .then( response => {
            this.setState({ items: response.data });
        })
        .catch( error => {
            console.log(error);
        });
    };

    clearMenu(e){
        e.preventDefault();
        this.addItemService.clearMenu(()=> {this.props.history.push("/all-items");})
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map( (object, i) => {
                return <MenuItem obj={object} key={i} onChange={this.handleChange} onDelete={this.handleDelete} />;
            });
        }
    }

    render(){
        return (
            <div className='content-container'>
                <h2 className='content-header'>Menu</h2>
                <button className='btn-small' onClick={this.clearMenu}>Clear Menu</button>
                <div id='total-carbs-desired-form'>
                    Total Carbs Desired&#58; 
                    <input type='number' id='carbsDesired' name='carbsDesired' onChange={this.handleChangeCarbsDesired}/>
                </div> 
                {this.tabRow()}
                <h3 style={{'paddingBottom': '1em'}}>Total Carbs Remaining: {this.state.carbsRemaining}</h3>
            </div>
        )
    }
}

export default Menu;