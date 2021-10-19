'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const _404 = require('./err-handlers/404'); 
const _500 = require('./err-handlers/500'); 

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use(validator);

app.get('/person', (req, res) => res.send({name: `${req.query.name}`}));

app.use(_404);
app.use(_500);

module.exports = {
  app,
  start: () => app.listen(port, console.log(`Server running on port ${port}`)),
};
