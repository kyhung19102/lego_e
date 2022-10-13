const Course = require('../models/Course');
const { multipleObject, singleObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                courses = multipleObject(courses);
                res.render('home', { courses })
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