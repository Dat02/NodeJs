const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// route nao cang chi tiet thi can de tren
router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
