const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart);
router.post('/cart', ordersCtrl.addToCart);
router.put('/cart', ordersCtrl.setItemQtyInCart);
router.post('/checkout', ordersCtrl.checkout);

module.exports = router