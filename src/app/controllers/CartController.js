const Product = require('../models/Product');
const mongoose = require('mongoose');
const Cart = require('../models/Cart');
const { multipleObject, singleObject, slugify } = require('../../util/mongoose');
class CartController {
    // courses/:slug
    index(req, res, next) {
        if (!req.session.cart) {
            return res.render('client/cart', { products: null });
        }
        let cart = new Cart(req.session.cart);
        res.render('client/cart', { products: cart.generateArray(), totalPrice: cart.totalPrice, username: req.cookies.customerName });
    }
    // Get
    add(req, res, next) {
        let productId = req.params.id;
        let cart = new Cart(req.session.cart ? req.session.cart : {});
        Product.findOne({ _id: productId }).then((product) => {
            cart.add(singleObject(product), singleObject(product)._id);
            req.session.cart = cart;
            res.redirect('/collection');
        }).catch(next);
    }
    // Post

    edit(req, res, next) {

    }
    // put courses/:id
    update(req, res, next) {

    }
    delete(req, res, next) {

    }
}
module.exports = new CartController;