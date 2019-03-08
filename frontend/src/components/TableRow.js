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
      this.addItemService.updateMenuItemData(this.props.obj._id, true, res => { this.props.onMenuItemAdd(); });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.deleteData(this.props.obj._id, res => {});
    }


  render() {
    const handleAddButtonColor = a => {
      if( a ) {
        return 'rgba(48, 151, 245, .6)';
      } else {
        return 'rgba(255, 255, 255, .6)';
      }
    }
    return (
        <tr>
          <td>
            {this.props.obj.item}
          </td>
          <td>
            {this.props.obj.tag}
          </td>
          <td>
            <button 
              onClick={this.handlePlus} 
              className='add-menu-item-button' 
              style={{background: handleAddButtonColor(this.props.obj.menuItem)}} >
                +
            </button>
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