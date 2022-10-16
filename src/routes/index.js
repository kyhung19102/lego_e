const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const courseRouter = require('./courses');
const adminSiteRouter = require('./admin/site');
function route(app) {
    // app.use('/news', newsRouter);
    // app.use('/courses', courseRouter);
    // app.use('/me', meRouter);
    app.use('/admin', adminSiteRouter);
    app.use('/', siteRouter);
    // Admin route
    // 404
    app.use((req, res, next) => {
        res.status(404).render('404',{layout:""});
    });
}
module.exports = route;