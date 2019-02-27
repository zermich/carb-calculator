import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.item}
          </td>
          <td>
            <button><Link to={`/edit/${this.props.obj._id}`}>Edit</Link></button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;