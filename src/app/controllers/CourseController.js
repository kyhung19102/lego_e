const Course = require('../models/Course');
const mongoose = require('mongoose');

const { multipleObject, singleObject } = require('../../util/mongoose');
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
            .then(() => res.redirect(`/`))
    }
}
module.exports = new CourseController;