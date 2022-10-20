const express = require('express')
const router = express.Router()
const categoryRouter = require('./categories');
const productRouter = require('./product');
const adminSiteController = require('../../app/controllers/AdminSiteController');
const authAdmin = require('../../middlewares/auth')
router.get('/login', authAdmin.checkAuth, adminSiteController.loginForm);
router.post('/login', adminSiteController.login);
router.use('/category', authAdmin.requireAuth, categoryRouter);
router.use('/product', authAdmin.requireAuth, productRouter);
router.get('/logout', adminSiteController.logout)
router.get('/', authAdmin.requireAuth, adminSiteController.index);
// router.use('/categories',categoryRouter);
module.exports = router;