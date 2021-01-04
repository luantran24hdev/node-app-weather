const Course = require("../models/Course");
const {multipleMongoooseObject} = require('../../util/mongoose');


class DashboardController {
  // domain : /dashboard
  storedCourses(req, res, next) {
     
    Course.find({})
    .then(courses => res.render('dashboard/stored-courses',{
      courses:multipleMongoooseObject(courses)
    }))
    .catch(next);
  }
}
module.exports = new DashboardController();
