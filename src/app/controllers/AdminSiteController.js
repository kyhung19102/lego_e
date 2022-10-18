const User = require('../models/User');
const md5 = require('md5');
class AdminSiteController {
    index(req, res, next) {

        // res.render('home');
        res.render('admin/home', { title: 'my other page', layout: 'mainadmin', title: "Admin dashboard" });
    }
    // Get login
    loginForm(req, res, next) {
        res.render('admin/login', { layout: '' })
    }
    // Post login
    login(req, res, next) {
        let username = req.body.username;
        let password = md5(req.body.password);
        User.findOne({ username, password })
            .then(data => {
                if (data) {
                    res.cookie('userId',data.id);
                   res.redirect('/admin/')
                }
                else {
                    res.render('admin/login', { layout: '', errors:"Please check again username and password", oldData: req.body});
                }
            })
    }

}
module.exports = new AdminSiteController;