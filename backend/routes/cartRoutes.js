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

module.exports = router;
