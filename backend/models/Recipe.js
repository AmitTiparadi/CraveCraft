// models/Recipe.js

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['northindian', 'southindian', 'continental'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [String],
  directions: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
