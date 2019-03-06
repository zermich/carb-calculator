var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define collection and schema for Items
var Item = new Schema({
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
  },
  menuItem: {
    type: Boolean,
    default: false
  }
},
{
  collection: 'items'
});

module.exports = mongoose.model('Item', Item);
