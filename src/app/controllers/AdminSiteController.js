class AdminSiteController {
    index(req, res, next) {

        // res.render('home');
        res.render('admin/home', { title: 'my other page', layout: 'mainadmin',title:"Admin dashboard"});
    }
    // Get news/slug
    search(req, res) {
        res.send('search')
    }
}
module.exports = new AdminSiteController;