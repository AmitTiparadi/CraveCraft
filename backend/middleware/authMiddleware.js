// middleware/authMiddleware.js

module.exports = (req, res, next) => {
  if (req.session && req.session.userId) {
    // User is authenticated
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};