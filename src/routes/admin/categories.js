const express = require('express');
const router = express.Router();
const categoryController = require('../../app/controllers/CategoryController');

router.get('/', categoryController.show);
router.get('/create', categoryController.create);
router.post('/store', categoryController.store);
router.get('/:id/edit', categoryController.edit);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);
module.exports = router;