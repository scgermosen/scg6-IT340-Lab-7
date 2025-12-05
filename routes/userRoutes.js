const express = require('express');
const router = express.Router();
const User = require('../models/Users'); // Imports Users model

// GET: Get list of all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "An error occured: =>  ", err: err });
    res.status(500).json({ message: "An error occured in userRoutes.js, line 6-14. =>", err: err })
  }
});

// POST: Create a new user
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message: "An error occured on useerRoutes.js -> router.post: =>  ", err: err });
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT: Update a user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
