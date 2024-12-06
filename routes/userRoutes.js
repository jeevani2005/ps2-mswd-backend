const express = require('express');
const { getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Protect routes with authentication
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
