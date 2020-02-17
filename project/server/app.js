// variables
const express = require('express');

const bodyparser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 8080;

import { userController } from './controller';


//Add Dependencies here
app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

//API routes
app.use('/', userController);

//Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
  mongoose.connect('mongodb://localhost/test').then(() => {
    console.log(`Connected to mongoDB at port 27017`);
  });
});
