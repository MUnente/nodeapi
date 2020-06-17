const database = require('../database/conn');

const sql =
  "CREATE TABLE IF NOT EXISTS product (\n" +
    "id INT NOT NULL AUTO_INCREMENT,\n" +
    "title VARCHAR(50) NOT NULL,\n" +
    "description VARCHAR(250) NOT NULL,\n" +
    "url VARCHAR(100) NOT NULL,\n" +
    "createdAt DATE NOT NULL,\n" +
    "PRIMARY KEY(id)\n" +
  ");";

database.query(sql, (err) => {
  if (err) console.log(err);
});
