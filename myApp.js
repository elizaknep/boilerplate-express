require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
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

app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
})

app.use(bodyParser.urlencoded({ extended: false }));

app.route('/name')
  .get((req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` })
  })
  .post((req, res) => {
    res.json({ name: `${req.body.first} ${req.body.last}` })
  })

module.exports = app;
