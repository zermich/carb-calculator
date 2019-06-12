import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemService from '../../ItemService';

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
    return (
          <tr>
           <td>
              <button onClick={this.handlePlus} className='add-menu-item-button btn-item-row'><i className="material-icons">add</i></button>
            </td>
            <td>
              {this.props.obj.item}
            </td>
            <td>
              {this.props.obj.tag}
            </td>
            <td>
              <Link to={`/edit/${this.props.obj._id}`} className='btn-item-row'><i className="material-icons">create</i></Link>
            </td>
            <td>
              <button onClick={this.handleSubmit} className='btn-item-row'><i className="material-icons">delete</i></button>
            </td>
          </tr>
    );
  }
}

export default TableRow;