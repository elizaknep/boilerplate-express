require('dotenv').config();
var express = require('express');
var app = express();
console.log('Hello world');

app.use((req, res, next) => {
  console.log(req.method, req.path, '-', req.ip);
  next();
})

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

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
})






























 module.exports = app;
