const Course = require('../models/Course');
const { multipleObject, singleObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                courses = multipleObject(courses);
                courses = courses.length > 6 ? courses.slice(0, 6) : courses;
                res.render('client/home', { courses, title: 'Homepage' })
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