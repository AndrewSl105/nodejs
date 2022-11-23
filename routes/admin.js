const express = require('express');
const AdminController = require('../controlers/admin')

const router = express.Router();

router.get('/add-product', AdminController.getAddProduct)

router.post('/add-product', AdminController.postAddProduct)

exports.routes = router;
