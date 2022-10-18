const Category = require('../models/Category');
const mongoose = require('mongoose');
const { multipleObject, singleObject, slugify } = require('../../util/mongoose');
class CategoryController {
    // courses/:slug
    show(req, res, next) {
        Category.find({})
            .then(categories => res.render("admin/category/list", { layout: 'mainadmin', title: "Category List", categories: multipleObject(categories) }))
            .catch(next);
    }
    create(req, res, next) {
        res.render("admin/category/create", { layout: 'mainadmin', title: "Add new Category" });
    }
    store(req, res, next) {
        if (!req.body.name) {
            res.render("admin/category/create", { layout: 'mainadmin', title: "Add new Category", error: "This field is required" });
        }
        else {
            const category = new Category(req.body);
            category.save()
                .then(() => res.redirect(`/admin/category`))
        }
    }
    edit(req, res, next) {
        Category.findById(req.params.id)
            .then(category => res.render('admin/category/edit', { layout: 'mainadmin', title: "Update Category", category: singleObject(category) }))
            .catch(next);
    }
    update(req, res, next) {
        if (!req.body.name) {
            res.render("admin/category/edit", { layout: 'mainadmin', title: "Update Category", error: "This field is required" });
        }
        else {
            const data = req.body;
            data['slug'] = slugify(req.body.name);
            Category.updateOne({ _id: req.params.id }, data)
                .then(() => res.redirect('/admin/category'))
                .catch(next);
        }
    }
    delete(req, res, next) {
        Category.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}
module.exports = new CategoryController;