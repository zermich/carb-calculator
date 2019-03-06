import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemService from '../components/ItemService';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    }

    handlePlus(event) {
      event.preventDefault();
        // this.addItemService.addItemToMenu(this.props.obj, res => {});
      this.addItemService.updateMenuItemData(this.props.obj._id, res => {});
    }


    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.deleteData(this.props.obj._id, res => {});
    }


  render() {
    return (
        <tr>
          <td>
            {this.props.obj.item}
          </td>
          <td>
            {this.props.obj.tag}
          </td>
          <td>
            <button onClick={this.handlePlus} className='add-menu-item-button'>+</button>
          </td>
          <td>
            <button><Link to={`/edit/${this.props.obj._id}`}>Edit</Link></button>
          </td>
          <td>
          {/* <form onSubmit={this.handleSubmit}>
            <input type='submit' value='Delete'/>
          </form> */}
            <button onClick={this.handleSubmit}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;