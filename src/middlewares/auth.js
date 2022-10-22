// Admin Auth
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
// User Auth
module.exports.checkAuthUser = function(req,res,next)
{
    if(req.cookies.customerid)
    {
        res.redirect('/')
        return;
    }
    next();
}
// Viết 1 cái auth là nó đăng nhập r thì chuyển qua cái khác ... 
