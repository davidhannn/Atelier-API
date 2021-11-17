const pool = require('../db.js');


const productQuery = `SELECT products.id, name, slogan, description, category, default_price, json_agg(json_build_object('feature', feature, 'value', value)) features FROM products
INNER JOIN features ON products.id = features.product_id AND products.id = $1 GROUP BY products.id ORDER BY products.id`







module.exports = {
  // getProduct: (req, res) => {
  //     pool.query('SELECT * from products WHERE id = $1', [req.params.id], (err, results) => {
  //     if (err) {
  //       throw err
  //     }
  //     res.send(results.rows[0]);
  //   })
  // },
  getProduct: (req, res) => {
    pool.query(productQuery, [req.params.id], (err, results) => {
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