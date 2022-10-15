const Course = require('../models/Course');
const { multipleObject, singleObject } = require('../../util/mongoose');
class MeController {

    // Get news/slug
    storeCourses(req, res,next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', { courses: multipleObject(courses) }))
            .catch(next);
    }
}
module.exports = new MeController;