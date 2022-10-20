const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController');
const collectionRouter = require('./collection')
const authCustomer = require('../middlewares/auth')
router.get('/search', siteController.search);
router.use('/collection', collectionRouter);
router.get('/detail/:id', siteController.detail);
router.get('/login', authCustomer.checkAuthUser, siteController.loginForm);
router.post('/login', authCustomer.checkAuthUser, siteController.login);
router.get('/regist', authCustomer.checkAuthUser, siteController.registForm);
router.post('/regist', authCustomer.checkAuthUser, siteController.regist);
router.get('/logout', siteController.logout);
router.get('/', siteController.index);
module.exports = router;