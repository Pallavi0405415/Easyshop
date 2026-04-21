const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add to cart
router.post('/add', async (req, res) => {
  const { userId, productId } = req.body;

  let item = await Cart.findOne({ userId, productId });

  if (item) {
    item.quantity += 1;
    await item.save();
  } else {
    item = new Cart({ userId, productId });
    await item.save();
  }

  res.json({ message: "Added to cart" });
});

// Get cart
router.get('/:userId', async (req, res) => {
  const items = await Cart.find({ userId: req.params.userId });
  res.json(items);
});

// Remove item
router.delete('/remove/:id', async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

module.exports = router;
