const express = require('express');
const router = express.Router();

const { getProduct, getProducts, getProductStyles, getRelatedProducts } = require('../controllers/products.js');
// const pool = require('../db.js');

// router.get('/:id', async (req, res) => {
//   const result = await productController.getProduct(req.params.id);
//   console.log(result)
//   res.json(result);
// })

router.get('/', getProducts);
router.get('/:id', getProduct);
router.get('/:id/styles', getProductStyles);
router.get('/:id/related', getRelatedProducts);

module.exports = router;