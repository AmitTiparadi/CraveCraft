// // middleware/authMiddleware.js

// module.exports = (req, res, next) => {
//   if (req.session && req.session.userId) {
//     // User is authenticated
//     next();
//   } else {
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };

// middleware/authMiddleware.js

module.exports = (req, res, next) => {
    // Check if the session exists and has a user ID
    console.log(req.session.userId);
    if (req.session && req.session.userId) {
      next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
      // Unauthorized access, send a 401 response
      res.status(401).json({ error: 'Unauthorized: Please log in to access this resource' });
    }
  };
  