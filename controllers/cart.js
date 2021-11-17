const pool = require('../db.js');

module.exports = {
  getCart: (req, res) => {
    pool.query('SELECT * from cart WHERE id = $1', [req.params.id], (err, res) => {
      if (err) {
        throw err
      }
      console.log(res.rows);
      // res.send()
    })
  }
}