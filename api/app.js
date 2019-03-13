const express = require('express');
const app = express();
const port = 4200;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

//Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://zermich:PeterPan01@ds153495.mlab.com:53495/carb-calculator', { useNewUrlParser: true })
    .then(() => {
        console.log('start');
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

//Required application specific custom router module
const itemRouter = require('./src/routes/ItemRouter');

//Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Adds /items to the beginning of all routes in itemRouter
app.use('/items', itemRouter);

//Start the server
app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
});
