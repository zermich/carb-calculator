import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Calculator from '../components/Calculator';
import NewItem from '../components/NewItem';

class Contentbox extends Component {
  render() {
    return (
      <div className="contentbox-wrapper">
        <h1>Carb Calculator</h1>
        <div className="contentbox">
        <Router>
          <Switch>
            <Route exact path='/' component={Calculator} />
            <Route exact path='/new-item' component={NewItem} />
          </Switch>
        </Router>
        </div>
      </div>
    )
  }
}

export default Contentbox;
