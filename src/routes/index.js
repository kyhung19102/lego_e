const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const adminSiteRouter = require('./admin/site');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/admin', adminSiteRouter);
    app.use('/', siteRouter);
}
module.exports = route;