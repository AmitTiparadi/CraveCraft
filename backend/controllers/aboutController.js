// controllers/aboutController.js

const Aboutus = require('../models/Aboutus');
const TeamMember = require('../models/TeamMember');
const Testimonial = require('../models/Testimonial');

// Fetches the "About Us" information from MongoDB
exports.getAboutUs = async (req, res) => {
  try {
    const about = await Aboutus.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
    console.log(err);
  }
};

// Retrieves team member information
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Retrieves user testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
