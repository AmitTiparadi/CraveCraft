// // controllers/authController.js

// const User = require('../models/User');

// // User Signup
// exports.signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Basic validation
//     if (!email || !password) {
//       return res.status(400).json({ error: 'Please provide email and password' });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     // Create new user
//     const user = new User({ email, password });
//     await user.save();

//     // Authenticate user by setting session
//     req.session.userId = user._id;

//     res.json({ message: 'User registered successfully', success: true });
//   } catch (err) {
//     res.status(500).json({ error: 'Server Error' });
//   }
// };

// // User Login
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Basic validation
//     if (!email || !password) {
//       return res.status(400).json({ error: 'Please provide email and password' });
//     }

//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     // Authenticate user by setting session
//     req.session.userId = user._id;

//     res.json({ message: 'User logged in successfully', success: true });
//   } catch (err) {
//     res.status(500).json({ error: 'Server Error' });
//   }
// };

// // User Logout
// exports.logout = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).json({ error: 'Could not log out. Please try again.' });
//     } else {
//       res.clearCookie('connect.sid');
//       res.json({ message: 'User logged out successfully', success: true });
//     }
//   });
// };

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
    req.session.save();  // Ensure session is saved before sending response

    res.json({ message: 'User registered successfully', success: true });
  } catch (err) {
    console.error(err);  // Log error for debugging
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
    req.session.save();  // Ensure session is saved before sending response

    res.json({ message: 'User logged in successfully', success: true });
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ error: 'Server Error' });
  }
};

// User Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out. Please try again.' });
    } else {
      res.clearCookie('connect.sid', {
        httpOnly: true,    // Prevents client-side access to the cookie
        secure: process.env.NODE_ENV === 'production', // Ensures secure cookies in production
        sameSite: 'strict', // Mitigates CSRF attacks
      });
      res.json({ message: 'User logged out successfully', success: true });
    }
  });
};

// Delete Account

// Delete User Account
exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.session.userId; // Retrieve user ID from the session
    
    // Check if user is authenticated
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized request' });
    }

    // Delete user from the database
    const result = await User.findByIdAndDelete(userId);
    
    // Check if the user was found and deleted
    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Destroy the session after account deletion
    req.session.destroy((err) => {
      if (err) {
        // If there’s an error in session destruction
        return res.status(500).json({ error: 'Error deleting account. Please try again.' });
      }
      
      // Clear the authentication cookie
      res.clearCookie('connect.sid', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure flag if in production
        sameSite: 'strict',
      });
      
      // Respond with success message
      res.json({ message: 'Account deleted successfully', success: true });
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error(err);  
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.checkSession = (req, res) => {
  if (req.session && req.session.userId) {
    res.status(200).json({ isAuthenticated: true, userId: req.session.userId });
  } else {
    res.status(200).json({ isAuthenticated: false });
  }
};