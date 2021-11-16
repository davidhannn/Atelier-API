const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'productOverview',
  password: '123456',
  port: 5432
})

const getProduct = (req, res) => {
  pool.query('SELECT * from products WHERE id = 1', (err, results) => {
    if(err) {
      throw err
    }
    console.log(results.rows)
    return results
  })
}

module.exports = {
  getProduct: getProduct
}