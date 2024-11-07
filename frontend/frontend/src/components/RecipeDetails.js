import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from URL params
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/recipes/category/${id}`)
      .then((response) => {
        setRecipe(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Directions</h3>
      <p>{recipe.directions}</p>
    </div>
  );
};

export default RecipeDetails;
