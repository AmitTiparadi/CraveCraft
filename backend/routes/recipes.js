// routes/recipes.js

const express = require('express');
const router = express.Router();
// const recipeController = require('../controllers/recipeController');
const recipeController = require('../controllers/recipeController');  // Correct import path

const authMiddleware = require('../middleware/authMiddleware');

// Fetches a list of recipes for a given category
router.get('/:category', recipeController.getRecipesByCategory);

// Fetches details for a specific recipe based on the recipe ID and category
router.get('/:category/:id', recipeController.getRecipeDetails);

// Update a recipe (protected route)
router.patch('/:id', authMiddleware, recipeController.updateRecipe);

module.exports = router;
