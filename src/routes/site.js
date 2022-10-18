const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController');
const collectionRouter  = require('./collection')
router.get('/search', siteController.search);
router.use('/collection',collectionRouter);
router.get('/detail/:id',siteController.detail);
router.get('/login', siteController.loginForm);
router.post('/login', siteController.login);
router.get('/regist', siteController.registForm);
router.post('/regist', siteController.regist);
router.get('/', siteController.index);
module.exports = router;