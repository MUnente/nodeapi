const database = require('../database/conn');

module.exports = {
  async index(req, res) {
    let {page} = req.query;

    if (page == undefined || page == 0) {
      page = '1';
    }

    const limit = 10, offset = (page - 1) * limit;
    const sql = `SELECT SQL_CALC_FOUND_ROWS * FROM product LIMIT ${limit} OFFSET ${offset}; SELECT FOUND_ROWS();`;
    
    const obj = {docs: '', total: '', limit, page, pages: ''};

    await database.query(sql, (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
      else {
        obj.docs = result[0];
        obj.total = result[1][0]['FOUND_ROWS()'];
        obj.pages = Math.ceil(obj.total / obj.limit);
        
        if (obj.docs.length === 0) {
          res.json('No rows are found');
        }
        else {
          res.json(obj);
        }
      }
    });
  },

  async store(req, res) {
    const {title, description, url} = req.body;
    const sql = `INSERT INTO product (title, description, url, createdAt) VALUES ('${title}', '${description}', '${url}', NOW())`;
    
    await database.query(sql, err => err ? res.status(400).send(err) : res.json('Product created'));
  },

  async show(req, res) {
    const sql = `SELECT * FROM product WHERE id = ${req.params.id};`;
    
    await database.query(sql, (err, result) => err ? res.status(400).send(err) : res.json(result));
  },

  async update(req, res) {
    let key, value, i = 1, sql = `UPDATE product SET `;
    const lengthObj = Object.keys(req.body).length;

    for (key in req.body) {
      value = req.body[key];

      if (i < lengthObj) {
        sql += `${key} = '${value}', `;
        i++;
      }
      else {
        sql += `${key} = '${value}' `;
      }
    }
    sql += `WHERE id = ${req.params.id};`;

    await database.query(sql, err => err ? res.status(400).send(err) : res.json('Product updated'));
  },

  async destroy(req, res) {
    const sql = `DELETE FROM product WHERE id = ${req.params.id};`;

    await database.query(sql, err => err ? res.status(400).send(err) : res.json('Product deleted'));
  },
};
