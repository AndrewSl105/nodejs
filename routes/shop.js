const express = require('express');
const ShopController = require('../controlers/shop')
const AdminController = require('../controlers/admin')

const router = express.Router();

router.get('/', ShopController.getHomePage)
router.get('/products', ShopController.getProducts)
router.get('/products:productId', ShopController.getProduct)
router.get('/admin/products', AdminController.getAdminProducts)
router.get('/cart', ShopController.getCart)
router.get('/checkout', ShopController.getCheckoutPage)
router.get('/orders', ShopController.getOrders)


module.exports = router;
