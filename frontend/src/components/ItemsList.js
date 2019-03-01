import React, { Component } from 'react';
import ItemService from '../components/ItemService';
import axios from 'axios';

import TableRow from '../components/TableRow';

class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ''
        };
        this.addItemService = new ItemService();
    }


    componentDidMount(){
        axios.get('http://localhost:4200/items')
        .then( response => {
            const itemsSort = response.data.sort((a, b) => {
              let textA = a.item.toLowerCase();
              let textB = b.item.toLowerCase();
              return (textA < textB) ? -1 : (textA > textB) ? 1: 0;
            });
            this.setState({ items: itemsSort });
        })
        .catch( error => {
            console.log(error);
        });
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
                <td>Item</td>
                <td>Category</td>
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