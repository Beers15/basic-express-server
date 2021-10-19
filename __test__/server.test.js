'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(app.app);

describe('Testing the Server', () => {
  it('Should respond with obj, {name: `foo`}, where name=foo is passed to /recipes as query string', async () => {

    const response = await request.get('/person?name=foo');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({name:  'foo'});
  });
  it ('should reject PUT requests', async () => {
    const response = await request.put('/');

    expect(response.status).toBe(404);
  });
  it('should reject POST requests', async () => {
    const response = await request.post('/');

    expect(response.status).toBe(404);
  });
  it ('should reject PATCH requests', async () => {
    const response = await request.patch('/');

    expect(response.status).toBe(404);
  });
  it ('should reject DELETE requests', async () => {
    const response = await request.delete('/');

    expect(response.status).toBe(404);
  });
});
