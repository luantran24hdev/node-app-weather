const Course = require("../models/Course");
const {multipleMongoooseObject} = require('../../util/mongoose');


class SiteController {
  // domain : /
  index(req, res, next) {
    //res.render('home');

    Course.find({})
      .then(courses =>{
        
        res.render('home', {courses:multipleMongoooseObject(courses)});
      })
      .catch(next);

  }

  // domain : /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
