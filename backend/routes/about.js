// routes/about.js

const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Fetches the "About Us" information from MongoDB
router.get('/', aboutController.getAboutUs);

// Retrieves team member information
router.get('/team', aboutController.getTeamMembers);

// Retrieves user testimonials
router.get('/testimonials', aboutController.getTestimonials);

module.exports = router;
