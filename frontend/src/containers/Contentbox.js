import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Calculator from '../components/Calculator';
import ItemsList from '../components/ItemsList';
import NewItem from '../components/NewItem';
import EditItem from '../components/EditItem';

class Contentbox extends Component {
  render() {
    return (
      <div className="contentbox-wrapper">
        <h1>Carb Calculator</h1>
        <div className="contentbox">
        <Router>
          <Switch>
            <Route exact path='/' component={Calculator} />
            <Route path='/all-items' component={ItemsList} />
            <Route path='/new-item' component={NewItem} />
            <Route path='/edit/>:id/' component={EditItem} />
          </Switch>
        </Router>
        </div>
      </div>
    )
  }
}

export default Contentbox;
