class SiteController {
  // domain : /
  index(req, res) {
    res.render('home');
  }

  // domain : /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
