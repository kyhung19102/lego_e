const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const courseRouter = require('./courses');
const adminSiteRouter = require('./admin/site');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/admin', adminSiteRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
    // 404
    app.use((req, res, next) => {
        res.status(404).render('404');
    });
}
module.exports = route;