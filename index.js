var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.locals.compileDebug = false;  <-- a 'fix' for the leak

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/fortune', function(req, res) {
  var fortunes = [
    {id: 0, message: "Additional fortune added at request time."},
    {id: 1, message: "Blurb"},
    {id: 2, message: "wat?"}
  ];

  res.render('fortunes', {fortunes: fortunes});
});

app.listen(process.env.PORT || 1337);
