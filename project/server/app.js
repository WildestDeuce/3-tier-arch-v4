// variables
const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;


//Add Dependencies here

//API routes
app.get('/', (req, res) => {
  res.status(200).json({
    status:'Server online'
  });
});

//Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
