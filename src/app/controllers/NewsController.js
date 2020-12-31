class NewsController {
  // domain : /news
  index(req, res) {
    res.render('news');
  }

  // domain : /news/:slug
  show(req, res) {
    res.send('NEWS DETAIL');
  }
}
module.exports = new NewsController();
