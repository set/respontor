const should = require('chai').should()

const response = require('../index');
let callback;

callback = response.json({
  message: 'This is success message',
});
callback.message.should.equal('This is success message');
callback.status.should.equal(200);

callback = response.json({
  message: 'This is error message',
}, response.BAD_REQUEST);
callback.message.should.equal('This is error message');
callback.status.should.equal(400);

callback = response.message('This is success message').catch();
callback.message.should.equal('This is success message');
callback.status.should.equal(200);

callback = response.message('This is error message').status(response.BAD_REQUEST).catch();
callback.message.should.equal('This is error message');
callback.status.should.equal(400);

callback = response.status(response.BAD_REQUEST).message('This is error message').catch();
callback.message.should.equal('This is error message');
callback.status.should.equal(400);

callback = response.status(response.BAD_REQUEST).message('This is error message').with({
  why: 'This is why you got the error'
}).catch();
callback.message.should.equal('This is error message');
callback.why.should.equal('This is why you got the error');
callback.status.should.equal(400);

