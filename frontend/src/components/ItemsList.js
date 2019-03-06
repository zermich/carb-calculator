import React, { Component } from 'react';
import axios from 'axios';

import ItemService from '../components/ItemService';
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
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount(){
      // axios.get('http://localhost:4200/items')
      this.addItemService.fetchAllItems()
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

    handleFilter(event){
      event.preventDefault();
      if(event.target.value === 'category'){
        this.addItemService.fetchAllItems()
        .then( response => {
            this.setState({ items: response.data });
        })
        .catch( error => {
            console.log(error);
        });
      } else {
        this.addItemService.filterData(event.target.value)
        .then((res) => {
          this.setState({ items: res.data });
        })
        .catch( err => {
            console.log(err);
        });
      }
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
                {/* <td><button onClick={this.handleFilter} name='tag'>Category</button></td> */}
                <td>
                  <select name='tag' placeholder='Category' onChange={this.handleFilter}>
                    <option default value='category'>Category</option>
                    <option value='fruit'>Fruit</option>
                    <option value='protein'>Protein</option>
                    <option value='vegetable'>Vegetable</option>
                    <option value='dessert'>Dessert</option>
                  </select>
                </td>
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