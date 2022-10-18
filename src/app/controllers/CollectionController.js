const Product = require('../models/Product');
const mongoose = require('mongoose');

const { multipleObject, singleObject, slugify } = require('../../util/mongoose');
class CollectionController {
    // courses/:slug
    show(req, res, next) {
        // req.params.slug
        Product.find({})
            .then(products => {
                res.render('client/collection', { products: multipleObject(products), title: "Collection" })
            }).catch(next);
        // res.send(req.params.slug);
    }
    // Get

}
module.exports = new CollectionController;