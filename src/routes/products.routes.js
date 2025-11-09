const express = require('express');
const router = express.Router();
const products = require('../data/products.data');

// 1. Import middleware validasi
const validateProduct = require('../middlewares/validateProduct');

// GET /
router.get('/', (req, res) => {
  res.json({ success: true, data: products });
});

// GET /:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
});

// POST /
// 2. Tambahkan 'validateProduct' sebelum (req, res)
router.post('/', validateProduct, (req, res) => {
  const { name, price } = req.body;

  const lastProduct = products.length > 0 ? products[products.length - 1] : null;
  const newId = lastProduct ? lastProduct.id + 1 : 1;

  const newProduct = { id: newId, name, price };
  products.push(newProduct);
  res.status(201).json({ success: true, message: 'Product created', data: newProduct });
});

// PUT /:id
// 3. Tambahkan 'validateProduct' di sini juga
router.put('/:id', validateProduct, (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' });
  products[index] = { id, name, price };
  res.json({ success: true, message: 'Product updated', data: products[index] });
});

// PATCH /:id
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  const { name, price, stock } = req.body;
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (stock !== undefined) product.stock = stock;

  res.json({
    success: true,
    message: 'Product partially updated',
    data: product
  });
});

// DELETE /:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' });
  products.splice(index, 1);
  res.json({ success: true, message: 'Product deleted' });
});


router.get('/crash/test', (req, res, next) => {
  const err = new Error('Tes error sengaja');
  next(err); // <-- Ini akan melempar error ke errorHandler.js
});

module.exports = router;