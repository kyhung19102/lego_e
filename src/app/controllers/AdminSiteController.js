class AdminSiteController {
    index(req, res, next) {

        // res.render('home');
        res.render('admin/home', { title: 'my other page', layout: 'mainadmin',title:"Admin dashboard"});
    }
    // Get news/slug
    login(req,res,next)
    {

    }  
}
module.exports = new AdminSiteController;