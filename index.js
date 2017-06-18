var express = require('express');
var knexfile = require('./knexfile.js');
var knex = require('knex');

var db = knex(knexfile[process.env.NODE_ENV || 'development']);

var app = express();

app.get('/', function(req, res, next) {
  db.raw('select 1 + 1 as num').then(result => {
    var number = result.rows[0].num;
    res.send('SQL query successful, result was: ' + number);
  });
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening');
});
