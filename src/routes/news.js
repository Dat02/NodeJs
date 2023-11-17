const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// route nao cang chi tiet thi can de tren
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
