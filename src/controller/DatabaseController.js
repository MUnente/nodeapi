const database = require('../database/conn');

let sql = 'CREATE DATABASE IF NOT EXISTS nodeapi;';

database.query(sql, (err) => {
  if (err) console.log(err);
});

sql = 'USE nodeapi;';

database.query(sql, (err) => {
  if (err) console.log(err);
});
