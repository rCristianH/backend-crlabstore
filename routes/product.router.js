const express = require('express');
const router = express.Router();
const ProductsService = require('./../services/product.service');
const service = new ProductsService();

router.get('/', async (req, res) => {
  try {
    const { size } = req.query;
    const limit = size ? Number(size) : service.find().length;
    const products = await service.find();
    res.json(products.slice(0, limit));
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await service.create(body);
  res.status(201).json(body);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.json(await service.update(id, body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await service.delete(id));
});

module.exports = router;
