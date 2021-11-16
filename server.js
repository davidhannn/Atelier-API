const fs = require('fs')
const csv = require('csv-parser');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./db.js');
const app = express();


const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/products', require('./routes/products'));


app.listen(PORT, () => {
  console.log(`Currenty listening to PORT ${PORT}`)
})

// const inputStream = fs.createReadStream
// fs.createReadStream('data/product.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed')
//   })

