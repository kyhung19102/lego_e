const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');
router.get('/show', cartController.index);
// router.get('/create', courseController.create);
router.get('/:id',cartController.add);
// router.get('/:slug', courseController.show);
// router.put('/:id', courseController.update)
// router.get('/:id/edit', courseController.edit);
// router.delete('/:id', courseController.delete);
module.exports = router;