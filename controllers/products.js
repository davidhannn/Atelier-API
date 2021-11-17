const pool = require('../db.js');

module.exports = {
  getProduct: (req, res) => {
      pool.query('SELECT * from products WHERE id = $1', [req.params.id], (err, results) => {
      if (err) {
        throw err
      }
      res.send(results.rows[0]);
    })
  },
  getProductStyles: (req, res) => {
    pool.query('SELECT * from productStyles WHERE productId = $1', [req.params.id], (err, results) => {
      if (err) {
        throw err
      }
      res.send(results.rows);
    })
  },
  getRelatedProducts: (req, res) => {
    pool.query('SELECT * from related WHERE current_product_id = $1', [req.params.id], (err, results) => {
      if (err) {
        throw err
      }
      res.send(results.rows);
    })
  }
}