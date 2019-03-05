import React, { Component } from 'react';
import ItemService from '../components/ItemService';
import axios from 'axios';

import TableRow from '../components/TableRow';

class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            sortBy: ''
        };
        this.addItemService = new ItemService();
        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount(){
      axios.get('http://localhost:4200/items')
      .then( response => {
          this.setState({ items: response.data });
      })
      .catch( error => {
          console.log(error);
      });
  }

    handleSort(e) {
        const sortBy = e.target.name;
        const itemsSort = this.state.items.sort((a, b) => {
          let textA = a[sortBy].toLowerCase();
          let textB = b[sortBy].toLowerCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1: 0;
        });
        this.setState({ items: itemsSort });
      
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map( (object, i) => {
                return <TableRow obj={object} key={i} />;
            });
        }
    }

    render() {
      return (
        <div className='content-container'>
          <h2 className='content-header'>Items</h2>
          <table className='items-table'>
            <thead>
              <tr>
                <td><button onClick={this.handleSort} name='item'>Item</button></td>
                <td><button onClick={this.handleSort} name='tag'>Category</button></td>
                {/* <td>Item</td>
                <td>Category</td> */}
              </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
          </table>
        </div>
      );
    }
  }

export default ItemsList;