import React, { Component } from 'react';
import axios from 'axios';

import ItemService from '../components/ItemService';
import TableRow from '../components/TableRow';
import CurrentMenuItemRow from '../components/CurrentMenuItemRow';


class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: '',
            sortBy: '',
            visibleItems: [],
            menuItems: ''
        };
        this.addItemService = new ItemService();
        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.updateCurrentMenu = this.updateCurrentMenu.bind(this);
        this.handleMenuItemDelete = this.handleMenuItemDelete.bind(this);
    }

    componentDidMount(){
      // this.addItemService.fetchAllItems()
      // .then( response => {
      //     this.setState({ items: response.data, visibleItems: response.data });
      // })
      // .catch( error => {
      //     console.log(error);
      // });

      // axios.get('http://localhost:4200/items/menu-items')
      // .then( response => {
      //     this.setState({ menuItems: response.data });
      //     // console.log(response.data);
      // })
      // .catch( error => {
      //     console.log(error);
      // });

      // Retrieves all items items with menuItem true from db items collection
      axios.all([
        axios.get('http://localhost:4200/items'),
        axios.get('http://localhost:4200/items/menu-items')
      ])
      .then(axios.spread((items, menuItems) => {
        this.setState({
          items: items.data,
          visibleItems: items.data,
          menuItems: menuItems.data
        })
      }))
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

    // Retrieves updated items with menuItem: true from db items collection when item is added to menu
    updateCurrentMenu() {
      axios.get('http://localhost:4200/items/menu-items')
      .then( response => {
          this.setState({ menuItems: response.data });
      })
      .catch( error => {
          console.log(error);
      });
    }

    // Creates table rows with this.state.visibleItems
    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.visibleItems.map( (object, i) => {
                return <TableRow obj={object} key={i} onMenuItemAdd={this.updateCurrentMenu}/>;
            });
        }
    }

    // Retrieves updated items with menuItem: true from db items collection when item is removed from menu
    handleMenuItemDelete(){
        axios.get('http://localhost:4200/items/menu-items')
        .then( response => {
            this.setState({ menuItems: response.data });
        })
        .catch( error => {
            console.log(error);
        });
    };

    // Creates table rows with this.state.menuItems
    currentMenuRow () {
        if(this.state.menuItems instanceof Array) {
            return this.state.menuItems.map( (object, i) => {
                // return <MenuItem obj={object} key={i} onChange={this.handleChange} onDelete={this.handleDelete} />;
                return <CurrentMenuItemRow obj={object} key={i} onDelete={this.handleMenuItemDelete} />;
            });
        }
    }

    render() {
      return (
        <div className='content-container'>
          <h2 className='content-header'>Items</h2>
          <div>
            <h3>Current Menu</h3>
            <table>
                <tbody>
                    {this.currentMenuRow()}
                </tbody>
            </table>
          </div>
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