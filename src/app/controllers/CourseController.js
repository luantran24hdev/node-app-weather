const Course = require("../models/Course"); // lấy dữ liệu từ DB
const {mongooseToObject} = require('../../util/mongoose');


class CourseController {
  // domain : /course/:slug
  show(req,res,next){

    Course.findOne({slug:req.params.slug}).then((course)=>{
        // res.json(course);
        res.render('courses/show', {course : mongooseToObject(course)});
    })
    .catch(next);
  }
  // [GET] create /course/creat

   create(req,res,next){

    res.render('courses/create'); 
  } 


   // [POST] create /course/store

   store(req,res,next){
      // const formData = req.body;
      
      // formData.thumb = `https://www.netlify.com/img/global/badges/netlify-color-accent.svg`
      const course = new Course(req.body);
      course.save();
      res.send('courses save');
  } 

  

}
module.exports = new CourseController();
