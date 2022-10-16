const express = require('express');
const router = express.Router();
const categoryController = require('../../app/controllers/CategoryController');

router.get('/', categoryController.show);
router.get('/create',categoryController.create);

module.exports = router;