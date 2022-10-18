const Category = require('../models/Category');
const Product = require('../models/Product');
const mongoose = require('mongoose');
const { multipleObject, singleObject, slugify } = require('../../util/mongoose');
class ProductController {
    // courses/:slug
    show(req, res, next) {
        Product.find({})
            .then(products => res.render("admin/product/list", { layout: 'mainadmin', title: "Product List", products: multipleObject(products) }))
            .catch(next);
    }
    create(req, res, next) {
        Category.find({}).then(categories => res.render("admin/product/create", { layout: 'mainadmin', title: "Add new Product", categories: multipleObject(categories) }));

    }
    store(req, res, next) {
        //    Validate
        let errors = {};
        if (!req.body.name) {
            errors.name = "This field is required";
        }
        if (!req.body.description) {
            errors.description = "This field is required";
        }
        if (!req.body.price) {
            errors.price = "This field is required";
        }
        let size = Object.keys(errors).length;
        if (size > 0) {
            Category.find({}).then(categories => res.render("admin/product/create", { layout: 'mainadmin', title: "Add new Product", categories: multipleObject(categories), errors: errors })).catch(next);
        }
        else {
            let imagePath = req.file?.path?.slice(11, req.file.path.length).replace('\\', '/');
            req.body = { ...req.body, image: imagePath };
            const product = new Product(req.body);
            product.save().then(() => { res.redirect('/admin/product') }).catch(next);
        }
    }
    edit(req, res, next) {

        Category.find({})
            .then(categories => Product.findById(req.params.id)
                .then(product => res.render('admin/product/edit', { layout: 'mainadmin', title: "Update Product", product: singleObject(product), categories: multipleObject(categories) }))
                .catch(next)).catch(next);
    }
    update(req, res, next) {
        let errors = {};
        if (!req.body.name) {
            errors.name = "This field is required";
        }
        if (!req.body.description) {
            errors.description = "This field is required";
        }
        if (!req.body.price) {
            errors.price = "This field is required";
        }
        let size = Object.keys(errors).length;
        if (size > 0) {
            req.body._id = req.params.id;
            Category.find({}).then(categories => res.render("admin/product/edit", { layout: 'mainadmin', title: "Update Product", categories: multipleObject(categories), errors: errors, product:req.body})).catch(next);
     
        }
        else {
            let imagePath = req.file?.path?.slice(11, req.file.path.length).replace('\\', '/');
            req.body['slug'] = slugify(req.body.name);
            req.body = { ...req.body, image: imagePath };
            Product.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/admin/product'))
                .catch(next);
        }
    }
    delete(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}
module.exports = new ProductController;