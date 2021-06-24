const express = require('express');
const knexfile = require('./knexfile.js');
const knex = require('knex');

const db = knex(knexfile[process.env.NODE_ENV || 'development']);

const app = express();

app.get('/', async function(req, res, next) {
  const result = await db.raw('select 1 + 1 as num')
  const number = result.rows[0].num;
  res.send('SQL query successful, result was: ' + number);
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening');
});
