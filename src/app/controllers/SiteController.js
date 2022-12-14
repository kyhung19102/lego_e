const Product = require('../models/Product');
const Customer = require('../models/Customer');
const store = require("store2");
const md5 = require('md5');
const { multipleObject, singleObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Product.find({})
            .then(products => {
                products = multipleObject(products);
                products = products.length > 6 ? products.slice(0, 6) : products;
                res.render('client/home', { products, title: 'Homepage', username: req.cookies.customerName })
            }).catch(next);
    }
    // Get news/slug
    search(req, res) {
        res.send('search')
    }
    detail(req, res, next) {
        Product.findOne({ _id: req.params.id })
            .then(product => {
                res.render('client/detail', { product: singleObject(product), username: req.cookies.customerName })
            }).catch(next);
    }
    loginForm(req, res, next) {

        res.render('client/login')
    }
    login(req, res, next) {
        let username = req.body.username;
        let password = md5(req.body.password);
        Customer.findOne({ username, password })
            .then(data => {
                if (data) {
                    res.cookie('customerid', data.id);
                    res.cookie('customerName', data.name);
                    req.session.cart = { items: {}, totalQty: 0, totalPrice: 0 };
                    res.redirect('/')
                }
                else {
                    res.render('client/login', { errors: "Please check again username and password", oldData: req.body });
                }
            })
    }
    registForm(req, res, next) {
        res.render('client/regist');
    }
    regist(req, res, next) {
        let errors = {};
        if (!req.body.username) {
            errors.username = "This field is required";
        }
        if (!req.body.password) {
            errors.password = "This field is required";
        }
        if (!req.body.name) {
            errors.name = "This field is required";
        }
        if (!req.body.address) {

            errors.address = "This field is required";
        }
        let size = Object.keys(errors).length;
        if (size > 0) {
            res.render('client/regist', { errors: errors, oldData: req.body })
        }
        else {
            let username = req.body.username;
            Customer.findOne({ username: username }).then(data => {
                if (data) {
                    res.render('client/regist', { errorAlert: "Username already exist in system  !", oldData: req.body })
                }
                else {
                    req.body.password = md5(req.body.password);
                    const customer = new Customer(req.body);
                    customer.save()
                        .then(() => res.render('client/login', { successMessage: "Create account successfully !" }));
                }
            }).catch(next);
        }
    }
    logout(req, res, next) {
        res.clearCookie('customerid');
        res.clearCookie('customerName');
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            }
        })
        res.redirect('/');
    }
}
module.exports = new SiteController;