const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserById } = require('../controllers/userController');


// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get a specific user by ID
router.get('/:id', getUserById);

module.exports = router;
