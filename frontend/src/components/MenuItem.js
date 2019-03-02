import React, { Component } from 'react';

import ItemService from './ItemService';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
    }


  render() {
    return (
        <div className='menu-item'>
            <h2>{this.props.obj.tag}: {this.props.obj.item}</h2>
            <form>
                <div className='form-row'>
                    <label>Item Carbs Desired:</label>
                    <input type='number' id='desired-carbs' name='item-desired-carbs' ref={input => this._newDesiredCarbs = input}/>
                </div>
            </form>
        </div>
    );
  }
}

export default MenuItem;