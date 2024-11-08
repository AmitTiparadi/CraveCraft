// // routes/auth.js

// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // User Signup
// router.post('/signup', authController.signup);

// // User Login
// router.post('/login', authController.login);

// // User Logout
// router.post('/logout', authController.logout);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// User Signup
router.post('/signup', authController.signup);

// User Login
router.post('/login', authController.login);

// User Logout
router.post('/logout', authController.logout);

// Delete Account - Protected Route
router.delete('/delete', authMiddleware, authController.deleteAccount);

// Define the route for checking session status
router.get('/check-session', authController.checkSession);

module.exports = router;
