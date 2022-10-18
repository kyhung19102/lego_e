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
}
module.exports = new SiteController;