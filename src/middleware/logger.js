'use strict';

module.exports = function(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  
  let method = req.method;
  if(method === 'GET') {
    next();
  } else {
    //only post request allowed, pass of to error handler middleware
    next('Invalid request made');
  }
};
