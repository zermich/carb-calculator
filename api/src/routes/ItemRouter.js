const express = require('express');
const router = express.Router();

// Require Item model in our routes module
const Item = require('../models/Item');
const MenuItem = require('../models/MenuItem');

// Defined store route
router.post('/new-item', (req, res) => {
  const item = new Item(req.body);
      item.save()
    .then(item => {
        res.json('Item added successfully');
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

// Defined menu-item store route
router.post('/menu-items', (req, res) => {
  const menu_item = new MenuItem(req.body);
      menu_item.save()
    .then(item => {
        res.json('Item added successfully');
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

// Defined get data menu items route
router.get('/menu-items', (req, res) => {
  console.log('menu items pinged');
  MenuItem.find((err, items) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});


// Defined get data(index or listing) route
router.get('/', (req, res) => {
  Item.find((err, items) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// ItemsList page filter query
router.get('/:tag', (req, res) => {
  const tagValue = req.params.tag;
  console.log(tagValue);
  Item.find({ tag: tagValue }, (err, items) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Item.findById(id, (err, item) => {
      res.json(item);
  });
});

//  Defined update route
router.put('/:id', (req, res) => {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      item.item = req.body.item;

      item.save().then(item => {
          res.json('Update complete', item);
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
router.delete('/:id', (req, res) => {
  Item.findOneAndDelete({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

// Defined menu delete | remove | destroy route
router.delete('/menu-items/:id', (req, res) => {
  MenuItem.findOneAndDelete({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
  })
  .then(res => {
    console.log('success');
  })  ;
});

module.exports = router;