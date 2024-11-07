// models/Testimonial.js

const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  user: String,
  message: String,
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
