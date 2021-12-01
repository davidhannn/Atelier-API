const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'productOverview',
//   password: '123456',
//   port: 5432
// })

const pool = new Pool({
  user: 'postgres',
  host: '3.144.140.23',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})


module.exports = pool;
