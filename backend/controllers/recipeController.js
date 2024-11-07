// controllers/recipeController.js

const Recipe = require('../models/Recipe');

// Fetches a list of recipes for a given category
exports.getRecipesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const recipes = await Recipe.find({ category }).limit(10);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Fetches details for a specific recipe based on the recipe ID and category
exports.getRecipeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findOne({ _id: id});
    console.log(recipe);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
  try {
    const id = req.params.id;  // Get the recipe id from the URL params
    const updateData = req.body;  // Get the data to update from the request body

    // Correctly use `id` here
    const recipe = await Recipe.findByIdAndUpdate(id, updateData, { new: true });

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ error: 'Server Error' });
  }
};
