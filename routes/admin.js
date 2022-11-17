const express = require('express');

const router = express.Router();

const productsController = require('../controlers/products')

router.get('/add-product', productsController.getAddProduct)

router.post('/add-product', productsController.postAddProduct)

exports.routes = router;
