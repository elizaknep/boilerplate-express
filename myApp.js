var express = require('express');
var app = express();
console.log('Hello world');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

































 module.exports = app;
