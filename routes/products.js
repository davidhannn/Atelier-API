const express = require('express');
const router = express.Router();

const productController = require('../models/products.js');
// const pool = require('../db.js');

router.get('/', async (req, res) => {
  var result = await productController.getProduct();
  console.log(result);
})

module.exports = router;