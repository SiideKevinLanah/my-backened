const express = require("express");
const router = express.Router();
const User = require("../models/User");
const protect = require("../middleware/protect");

// CREATE
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User created!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", protect,async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "User updated!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PROFILE — protected
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", protect,async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id).select("-password");
    res.json({ message: "User deleted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;