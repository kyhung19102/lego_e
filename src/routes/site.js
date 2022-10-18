const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController');
const collectionRouter  = require('./collection')
router.get('/search', siteController.search);
router.use('/collection',collectionRouter);
router.get('/', siteController.index);
module.exports = router;