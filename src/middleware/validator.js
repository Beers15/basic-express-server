'use strict';

module.exports = function(req, res, next) {
  if(!req.query.name) {
    console.log('No name provided');
    next('No name provided');
  } else {
    next();
  }
};
