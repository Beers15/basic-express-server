'use strict';

const validator = require('../src/middleware/validator.js');

describe('Testing the validation middleware', () => {
  let req = {method: 'GET', path: '/person', query: undefined};
  let res = {};
  let next = jest.fn(); //a jest "spy"
  console.log = jest.fn();

  it('Should be able to validate that a query string was with a key of name was passed in', () => {
    console.log(req.query);
    // actually use our logger
    validator(req, res, next);

    expect(console.log).toHaveBeenCalledWith('No name provided');
    expect(next).toHaveBeenCalled();
  });
});
