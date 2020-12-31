const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // news page
  app.use('/news', newsRouter);

  // news page
  app.use('/', siteRouter);
}

module.exports = route;
