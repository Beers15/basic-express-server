'use strict';

module.exports = function(req, res, next) {
  if(!req.query) {
    console.log('No name provided');
    next('No name provided');
  } else if(!req.query.name) {
    console.log('No name provided');
    next('No name provided');
  } else {
    console.log('Name provided');
    next();
  }
};
