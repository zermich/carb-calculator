import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Calculator from '../components/Calculator';
import ItemsList from '../components/ItemsList';
import NewItem from '../components/NewItem';
import EditItem from '../components/EditItem';
import Navbar from '../components/Navbar';

class Contentbox extends Component {
  render() {
    return (
      <div className='contentbox-wrapper'>
        <Router>
          <div>
            <div id='title-nav'>
              <h1>Carb Calculator</h1>
              <Navbar />
            </div>
            <div className='contentbox'>
                <Switch>
                  <Route exact path='/' component={Calculator} />
                  <Route path='/all-items' component={ItemsList} />
                  <Route path='/new-item' component={NewItem} />
                  <Route path='/edit/>:id/' component={EditItem} />
                </Switch>
              </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Contentbox;
