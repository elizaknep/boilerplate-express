var express = require('express');
var app = express();
console.log('Hello world');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use('/public', express.static(`${__dirname}/public`));
































 module.exports = app;
