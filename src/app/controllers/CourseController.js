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
      const formData = req.body;
      
      formData.thumb = `https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/1/1/photo1609513166556-16095131669071492266823.jpg`
      const course = new Course(req.body);
      course.save().then(()=> res.redirect('/'))

      
      
  } 

  // [GET] create /course/edit

   edit(req,res,next){
    Course.findById(req.params.id).then(course => res.render('courses/edit', {
        course:mongooseToObject(course)
    }))
   .catch(next);
  } 

  update(req,res,next){
     Course.updateOne({_id: req.params.id}, req.body).then(()=>res.redirect('/dashboard/stored/courses'))
     .catch(next)
     
    
  }


  delete(req,res,next){
      Course.deleteOne({_id: req.params.id}).then(()=>res.redirect('back'))
                                            .catch(next);
  }
  

}
module.exports = new CourseController();
