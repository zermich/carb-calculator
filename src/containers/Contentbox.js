import React, { Component } from 'react';
import Calculator from 'Calculator';
import NewItem from 'NewItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Contentbox extends Component {
  render() {
    return (
      <div className="contentbox-wrapper">
        <h1>Carb Calculator</h1>
        <div className="contentbox">
        <Router>
          <Switch>
            <Route path="/" component={Calculator}/>
            <Route path="/newitem" component={NewItem}/>
          </Switch>
        </Router>
        </div>
      </div>
    )
  }
}

export default Contentbox;
