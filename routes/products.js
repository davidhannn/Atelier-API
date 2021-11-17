const express = require('express');
const router = express.Router();

const productController = require('../controllers/products.js');
// const pool = require('../db.js');

// router.get('/:id', async (req, res) => {
//   const result = await productController.getProduct(req.params.id);
//   console.log(result)
//   res.json(result);
// })

router.get('/:id', productController.getProduct);

module.exports = router;