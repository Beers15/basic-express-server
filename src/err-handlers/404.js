'use strict';

module.exports = function(err, req, res, next) {
  if(req.path !== '/person') {
    console.log(req.path, 'is not a valid route');
    res.status(404);
    next('404/Not-Found');
  } else {
    if(err) {
      next(err);
    }
    next();
  }
};
