import React, { Component } from 'react';
// import axios from 'axios';

import ItemService from '../ItemService';
import TableRow from './table-row/TableRow';
import CurrentMenuItemRow from './current-menu-item-row/CurrentMenuItemRow';


class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            sortBy: '',
            visibleItems: [],
            menuItems: ''
        };
        this.addItemService = new ItemService();
        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateCurrentMenu = this.updateCurrentMenu.bind(this);
    }

    componentDidMount(){
      // Retrieves all items from db items collection
      this.addItemService.fetchAllItems()
          .then( res => {
            this.setState({
              items: res.data,
              visibleItems: res.data
            })
          })
          .catch( err => {
            console.log(err);
          });

      // Retrieves all items with menuItem: true from db items collection
      this.addItemService.fetchMenuItems()
          .then( res => {
            this.setState({
              menuItems: res.data
            })
          })
          .catch( err => {
            console.log(err);
          });
    }

    // On Item header click sorts table rows by item name
    handleSort(e) {
      const sortBy = e.target.name;
      const itemsSort = this.state.items.sort((a, b) => {
        let textA = a[sortBy].toLowerCase();
        let textB = b[sortBy].toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1: 0;
      });
      this.setState({ items: itemsSort });
    }

    // On category option select filters items with tag: event.target.value
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

    handleInputChange() {
      var searchedItems = this.state.items.filter( el => {
        return el.item.toLowerCase().indexOf(this.search.value.toLowerCase()) !== -1;
        // return el.item.toLowerCase();
      });

      // const muggle = this.state.items[2].name;
      // const squib = muggle.toLowerCase();
      this.setState({
        visibleItems: searchedItems
      })
    }

    // Retrieves updated items with menuItem: true from db items collection when item is added to/removed from menu
    updateCurrentMenu() {
      this.addItemService.fetchMenuItems()
      .then ( res => {
        this.setState({ menuItems: res.data });
      })
      .catch( err => {
        console.log(err);
      });
    }

    // Creates table rows with this.state.visibleItems
    tabRow(){
        if(this.state.items instanceof Array){
          const itemsSort = this.state.visibleItems.sort((a, b) => {
            let textA = a["tag"].toLowerCase();
            let textB = b["tag"].toLowerCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1: 0;
          });

          return itemsSort.map( (object, i) => {
              return <TableRow obj={object} key={i} onMenuItemAdd={this.updateCurrentMenu}/>;
          });
        }
    }

    // Creates table rows with this.state.menuItems
    currentMenuRow () {
        if(this.state.menuItems instanceof Array) {
            return this.state.menuItems.map( (object, i) => {
                // return <MenuItem obj={object} key={i} onChange={this.handleChange} onDelete={this.handleDelete} />;
                return <CurrentMenuItemRow obj={object} key={i} onDelete={this.updateCurrentMenu} />;
            });
        }
    }

    render() {
      return (
        <div className='content-container'>
          <h2 className='content-header'>Items</h2>
          <div id='current-menu-container'>
            <h3>Current Menu</h3>
            <table>
                <tbody>
                    {this.currentMenuRow()}
                </tbody>
            </table>
          </div>

          <form id='search-form'>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </form>

          <table className='items-table'>
            <thead>
              <tr>
                <th></th>
                <th><button onClick={this.handleSort} name='item'>Item</button></th>
                <th>
                  <select name='tag' placeholder='Category' onChange={this.handleFilter}>
                    <option default value='category'>All Categories</option>
                    <option value='fruit'>Fruit</option>
                    <option value='protein'>Protein</option>
                    <option value='vegetable'>Vegetable</option>
                    <option value='dessert'>Dessert</option>
                    <option value='misc'>Misc</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody className='items-list-tbody'>
              {this.tabRow()}
            </tbody>
          </table>
        </div>
      );
    }
  }

export default ItemsList;