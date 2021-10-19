'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/person', (req, res) => {
  res.send("TEST");
});


module.exports = {
  app,
  start: () => app.listen(port, console.log(`Server running on port ${port}`))
}
