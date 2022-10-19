const Product = require('../models/Product');
const Customer = require('../models/Customer');
const md5 = require('md5');
const { multipleObject, singleObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        let userName = req.cookies.customerName ? req.cookies.customerName : " ";
        Product.find({})
            .then(products => {
                products = multipleObject(products);
                products = products.length > 6 ? products.slice(0, 6) : products;
                res.render('client/home', { products, title: 'Homepage', userName: userName })
            }).catch(next);
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
    login(req, res, next) {
        let username = req.body.username;
        let password = req.body.password;
        Customer.findOne({ username, password })
            .then(data => {
                if (data) {
                    res.cookie('customerid', data.id);
                    res.cookie('customerName', data.name);
                    res.render('client/home', { username: data.name })
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
}
module.exports = new SiteController;