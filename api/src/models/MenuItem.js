var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define collection and schema for Items
var MenuItem = new Schema({
  item: {
    type: String
  },
  tag: {
    type: String
  },
  servingSize: {
    type: Number
  },
  measure: {
    type: String
  },
  carbs: {
    type: Number
  }
},
{
  collection: 'menu-items'
});

module.exports = mongoose.model('MenuItem', MenuItem);