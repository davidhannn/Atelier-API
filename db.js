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
  host: '18.224.113.206',
  database: 'productoverview',
  password: '123456',
  port: 5432
})


module.exports = pool;
