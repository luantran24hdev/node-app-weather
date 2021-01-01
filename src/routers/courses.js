const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');




// created
router.get('/create', courseController.create); 


// created
router.post('/store', courseController.store);

// newsController.index
router.get('/:slug', courseController.show);



module.exports = router;
