const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const dashboardRouter = require('./dashboard');


function route(app) {


  
  
  // news page
  app.use('/news', newsRouter);


  // news page detail courses
  app.use('/dashboard', dashboardRouter);


  // news page
  app.use('/', siteRouter);

  // news page detail courses
  app.use('/courses', coursesRouter);

  

  
}

module.exports = route;
