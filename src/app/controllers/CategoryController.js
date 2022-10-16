const Course = require('../models/Course');
const mongoose = require('mongoose');

const { multipleObject, singleObject, slugify } = require('../../util/mongoose');
class CategoryController {
    // courses/:slug
    show(req, res, next) {
        res.render("admin/category/list", { layout: 'mainadmin', title: "Category List" });
    }
    create(req,res,next)
    {
        res.render("admin/category/create", { layout: 'mainadmin',title:"Add new Category"});
    }

}
module.exports = new CategoryController;