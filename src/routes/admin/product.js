const express = require('express');
const router = express.Router();
const productController = require('../../app/controllers/ProductController');
const multer  = require('multer');
const upload = multer({ dest: './src/public/uploads/' })
router.get('/', productController.show);
router.get('/create', productController.create);
router.post('/store',upload.single('image'), productController.store);
router.get('/:id/edit', productController.edit);
router.put('/:id',upload.single('image'), productController.update);
router.delete('/:id', productController.delete);
module.exports = router;