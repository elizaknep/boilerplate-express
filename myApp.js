require('dotenv').config();
var express = require('express');
var app = express();
console.log('Hello world');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use('/public', express.static(`${__dirname}/public`));

app.get('/json', function(req, res) {
  let message = 'Hello json';
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
})






























 module.exports = app;
