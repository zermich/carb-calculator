const express = require('express');
const router = express.Router();

// Require Item model in our routes module
const Item = require('../models/Item');
const MenuItem = require('../models/MenuItem');

// Returns all items from db item collection
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

// Returns all items from db item collection with menuItem: true
router.get('/menu-items', (req, res) => {
  Item.find({ 'menuItem': true }, (err, items) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Saves new item to db item collection with Item schema
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
// router.post('/menu-items', (req, res) => {
//   const menu_item = new MenuItem(req.body);
//       menu_item.save()
//     .then(item => {
//         res.json('Item added successfully');
//     })
//     .catch(err => {
//         res.status(400).send("unable to save to database");
//     });
// });

// Defined get data menu items route
// router.get('/menu-items', (req, res) => {
//   console.log('menu items pinged');
//   MenuItem.find((err, items) => {
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(items);
//     }
//   });
// });


// Returns items from db item collection with tag: req.params.tag
router.get('/:tag', (req, res) => {
  const tagValue = req.params.tag;
  Item.find({ tag: tagValue }, (err, items) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Returns item from db item collection with id: req.params.id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Item.findById(id, (err, item) => {
      res.json(item);
  });
});

// Updates/saves item from db item collection data
router.put('/:id', (req, res) => {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
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
          res.json(item);
        })
      }
      // .catch(err => {
      //       res.status(400).send("unable to update the database");
      // });
    }
    
  });
});

router.put('/menu/clear-menu', (req, res) => {
  // res.send('success');
  // Item.updateMany({ menuItem: true}, {$set: {menuItem: false}})
  // .catch (err => console.log(err));
  // try {
  //   Item.updateMany({ menuItem: true}, {$set: {menuItem: false}});
  //   res.send('success');
  // } catch (e) {
  //   print(e);
  // }
  Item.updateMany({ menuItem: true }, { menuItem: false}, err => { console.log(err);})
    .then( res.send('success'));
})

// Deletes item from db item collection
router.delete('/:id', (req, res) => {
  Item.findOneAndDelete({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

// // Defined menu delete | remove | destroy route
// router.delete('/menu-items/:id', (req, res) => {
//   MenuItem.findOneAndDelete({_id: req.params.id},
//        function(err, item){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//   })
//   .then(res => {
//     console.log('success');
//   })  ;
// });

module.exports = router;