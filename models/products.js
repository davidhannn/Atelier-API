const pool = require('../db.js');

module.exports = {
  getProduct: () => {
    pool.query('SELECT * from products WHERE id = 1', (err, results) => {
      if(err) {
        throw err
      }
      console.log(results.rows)
      return results
    })
  }
}