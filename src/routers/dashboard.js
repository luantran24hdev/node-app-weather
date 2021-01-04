const express = require('express');
const router = express.Router();

const dashboardController = require('../app/controllers/DashboardController');




// created
router.get('/stored/courses', dashboardController.storedCourses); 






module.exports = router;
