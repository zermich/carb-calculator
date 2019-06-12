import React, { Component } from 'react';

import ItemService from '../ItemService';

class CurrentMenuItemRow extends Component {

    constructor(props) {
        super(props);
        
        this.addItemService = new ItemService();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.addItemService.updateMenuItemData(this.props.obj._id, false, res => {  this.props.onDelete(); });
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
                <button className="btn-current-menu-delete" onClick={this.handleDelete}>X</button>
            </td>
        </tr>
    );
  }
}

export default CurrentMenuItemRow;