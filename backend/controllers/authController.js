// controllers/authController.js

const User = require('../models/User');

// User Signup
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new user
    const user = new User({ email, password });
    await user.save();

    // Authenticate user by setting session
    req.session.userId = user._id;

    res.json({ message: 'User registered successfully', success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Authenticate user by setting session
    req.session.userId = user._id;

    res.json({ message: 'User logged in successfully', success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// User Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out. Please try again.' });
    } else {
      res.clearCookie('connect.sid');
      res.json({ message: 'User logged out successfully', success: true });
    }
  });
};