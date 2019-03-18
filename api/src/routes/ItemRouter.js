const express = require('express');
const router = express.Router();

// Require Item model in our routes module
const Item = require('../models/Item');

// Returns all items from db item collection
router.get('/', (req, res) => {
  Item.find((err, items) => {
    if(err){
      console.log('get / err is', err);
    }
    else {
      res.status(200).json(items);
    }
  });
});

// Returns all items from db item collection with menuItem: true
router.get('/menu-items', (req, res) => {
  Item.find({ 'menuItem': true }, (err, items) => {
    if(err){
      console.log('get /menu-items err is', err);
    }
    else {
      res.status(200).json(items);
    }
  });
});

// Returns item from db item collection with id: req.params.id
router.post('/fetch', (req, res) => {
  const id = req.body.itemId;
  Item.findById(id, (err, item) => {
      res.status(200).json(item);
  });
});

// Saves new item to db item collection with Item schema
router.post('/new-item', (req, res) => {
  const item = new Item(req.body);
      item.save()
    .then(item => {
        res.status(200).json('Item added successfully');
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});


// Returns items from db item collection with tag: req.params.tag
router.get('/:tag', (req, res) => {
  const tagValue = req.params.tag;
  Item.find({ tag: tagValue }, (err, items) => {
    if(err){
      console.log('get /:tag err is', err);
    }
    else {
      res.status(200).json(items);
    }
  });
});

// Updates/saves item from db item collection data
router.put('/:id', (req, res) => {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.item = req.body.item;
      item.tag = req.body.tag;
      item.servingSize = req.body.servingSize;
      item.measure =  req.body.measure;
      item.carbs =  req.body.carbs;

      item.save()
      .then(item => {
        res.status(200).json(item);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    }
  });
});

// Updates item from db item collection with menuItem: req.body.menuItem
router.put('/add-menu-item/:id', (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      if(item.menuItem === req.body.menuItem) {
        console.log('Item already added to menu');
      } else {
        item.menuItem = req.body.menuItem;
        item.save().then(item => {
          res.status(200).json(item);
        })
      }
    }   
  });
});

router.put('/menu/clear-menu', (req, res) => {
  Item.updateMany({ menuItem: true }, { menuItem: false})
    .then( res.status(200).json('success'))
    .catch( err => {console.log(err);});
})

// Deletes item from db item collection
router.delete('/:id', (req, res) => {
  Item.findOneAndDelete({_id: req.params.id},
       function(err, item){
        if(err) res.status(400).json(err);
        else res.status(200).json('Successfully removed');
    });
});

module.exports = router;