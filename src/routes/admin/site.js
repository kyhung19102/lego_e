const express = require('express')
const router = express.Router()
const categoryRouter = require('./categories');
const adminSiteController = require('../../app/controllers/AdminSiteController');
router.get('/login', adminSiteController.login);
router.use('/category', categoryRouter);
router.get('/', adminSiteController.index);
// router.use('/categories',categoryRouter);
module.exports = router;