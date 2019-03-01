import React, { Component } from 'react';
import ItemService from './ItemService';

import MiniCalculator from '../components/MiniCalculator';

class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            carbsDesired: 0
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
                <MiniCalculator />
            </div>
        )
    }
}

export default Menu;