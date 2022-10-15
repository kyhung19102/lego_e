const Course = require('../models/Course');
const mongoose = require('mongoose');

const { multipleObject, singleObject, slugify } = require('../../util/mongoose');
class CourseController {
    // courses/:slug
    show(req, res, next) {
        // req.params.slug
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/detail', { course: singleObject(course) })
            }).catch(next);
        // res.send(req.params.slug);
    }
    // Get
    create(req, res, next) {
        res.render('courses/create')
    }
    // Post
    store(req, res, next) {
        //   Add 
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect(`/courses`))
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', { course: singleObject(course) }))
            .catch(next);
    }
    // put courses/:id
    update(req, res, next) {
        const data = req.body;
        data['slug'] = slugify(req.body.name);
        Course.updateOne({ _id: req.params.id }, data)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CourseController;