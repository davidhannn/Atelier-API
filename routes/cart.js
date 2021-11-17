const express = require('express');
const router = express.Router();

const { getCart, postCart } = require('../controllers/cart');

router.get('/:id', getCart)
// router.post('/', postCart)

module.exports = router;