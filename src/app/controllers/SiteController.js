const Product = require('../models/Product');
const { multipleObject, singleObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {

        Product.find({})
            .then(products => {
                products = multipleObject(products);
                products = products.length > 6 ? products.slice(0, 6) : products;
                res.render('client/home', { products, title: 'Homepage' })
            })
            .catch(error => next(error));
        // res.render('home');
    }
    // Get news/slug
    search(req, res) {
        res.send('search')
    }
    detail(req, res, next) {
        Product.findOne({ _id: req.params.id })
            .then(product => {
                res.render('client/detail', { product: singleObject(product) })
            }).catch(next);
    }
    loginForm(req, res, next) {
        res.render('client/login');
    }
    login(req,res,next)
    {

    }
    registForm(req, res, next) {
        res.render('client/regist');
    }
    regist(req,res,next)
    {

    }
}
module.exports = new SiteController;