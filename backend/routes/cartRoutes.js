const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Add to cart
router.post("/add", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let item = await Cart.findOne({ userId, productId });

    if (item) {
      item.quantity += 1;
      await item.save();
    } else {
      item = new Cart({ userId, productId });
      await item.save();
    }

    res.json({ message: "Added to cart" });

  } catch (err) {
    res.status(500).json({ message: "Error adding to cart" });
  }
});

// Get cart
router.get("/:userId", async (req, res) => {
  try {
    const items = await Cart.find({ userId: req.params.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart" });
  }
});

// Remove item
router.delete("/remove/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ message: "Error removing item" });
  }
});

module.exports = router;
