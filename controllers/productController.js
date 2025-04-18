const Product = require('../models/Product');

//GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const search = req.query.search || '';

    const query = search
      ? { name: { $regex: search, $options: 'i' } } 
      : {};

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// GET single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// POST a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, currency } = req.body;
    const image = req.file.path; // image URL from Cloudinary

    const product = new Product({ name, description, price, currency, image });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// PUT update a product
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updateFields = { name, description, price };

    if (req.file) {
      updateFields.image = req.file.path;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// DELETE a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
