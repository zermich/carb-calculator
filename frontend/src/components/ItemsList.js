import React, { Component } from 'react';

import ItemService from '../components/ItemService';
import TableRow from '../components/TableRow';


class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            sortBy: '',
            visibleItems: []
        };
        this.addItemService = new ItemService();
        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount(){
      this.addItemService.fetchAllItems()
      .then( response => {
          this.setState({ items: response.data, visibleItems: response.data });
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
      const filterValue = event.target.value;
      const itemsList = this.state.items;
      const visibleItemsList = [];
      itemsList.forEach( obj => {
        if(obj.tag === filterValue) {
          visibleItemsList.push(obj);
          console.log(visibleItemsList);
        }
      });
      if(filterValue === 'category') {
        this.setState({ visibleItems: this.state.items });
      } else {
        this.setState({ visibleItems: visibleItemsList });
      }
    }

    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.visibleItems.map( (object, i) => {
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
                    <option default value='category'>All Categories</option>
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