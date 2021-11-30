const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'productoverview',
  password: '123456',
  port: 5432
})

module.exports = pool;
