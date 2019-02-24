import React, { Component } from 'react';

class NewItem extends Component {
  render () {
    return (
      <div className="new-item-container">
        <h2>New Item</h2>
        <form>
          <div className="form-row">
            <label htmlFor="name">Item Name&#58;</label>
            <input type="text" id="name" name="item-name" />
          </div>
          <div className="form-row">
            <label htmlFor="tag">Tag&#58;</label>
            <input type="text" id="tag" name="item-tag" />
          </div>
          <div className="form-row">
            <label htmlFor="serving-size">Serving Size&#58;</label>
            <input type="number" id="serving-size" name="item-serving-size" />
          </div>
          <div className="form-row">
            <label htmlFor="calories">Calories&#58;</label>
            <input type="number" id="calories" name="item-calories" />
          </div>
          <div className="form-row">
            <label htmlFor="carbs">Carbs&#58;</label>
            <input type="number" id="carbs" name="item-carbs" />
          </div>
          <div className="button">
            <button type="submit">Add Item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewItem;
