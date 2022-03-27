# respontor
Library for who wants to give response more readable

### Usage;
```javascript
const response = require('Response');

response.json({
  message: 'This is success message',
});
// returns { message: 'This is success message', status: 200 },

response.json({
  message: 'This is error message',
}, response.BAD_REQUEST);
// returns { message: 'This is error message', status: 400 },

response.message('This is success message').catch();
// returns { message: 'This is success message', status: 200 },

response.message('This is error message').status(response.BAD_REQUEST).catch();
// returns { message: 'This is error message', status: 400 },

response.status(response.BAD_REQUEST).message('This is error message').catch();
// returns { message: 'This is error message', status: 400 },

response.status(response.BAD_REQUEST).message('This is error message').with({
  why: 'This is why you got the error'
}).catch();
// returns { message: 'This is error message', why: 'This is why you got error', status: 200 },
```
