const Item = require('../../models/item');
const Order = require('../../models/order');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout
}

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}
async function setItemQtyInCart(req, res) {}
async function checkout(req, res) {}