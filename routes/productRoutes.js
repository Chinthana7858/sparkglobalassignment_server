const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.post('/', upload.single('image'), createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/update/:id', upload.single('image'), updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
