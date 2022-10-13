class NewsController
{
    index(req,res)
    {
        res.render('news');
    }
    // Get news/slug
    show(req,res)
    {
        res.send('newDetail')
    }
}
module.exports = new NewsController;