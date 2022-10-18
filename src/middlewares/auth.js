module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.userId)
    {
        res.redirect('/admin/login');
        return;
    }
    next();
}
module.exports.checkAuth = function(req,res,next){
    if(req.cookies.userId)
    {
        res.redirect('/admin/');
        return;
    }
    next();
}