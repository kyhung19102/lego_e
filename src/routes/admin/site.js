const express = require('express')
const router = express.Router()
const adminSiteController = require('../../app/controllers/AdminSiteController');
router.get('/', adminSiteController.index);
module.exports = router;