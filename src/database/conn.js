const mysql = require('mysql');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '',
});

database.connect((err) => {
  if (err) return console.log(err);
});

module.exports = database;

require('../controller/DatabaseController');
