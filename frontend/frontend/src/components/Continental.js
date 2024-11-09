import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from './cards';
import spaegatti from '../images/continental/spag.jpeg';
import salad from '../images/continental/cae.jpeg';
import fishchips from '../images/continental/fish&chips.jpeg';
import grilled from '../images/continental/grilled.jpeg';
import soup from '../images/continental/soup.jpeg';
import beef from '../images/continental/beef.jpeg';
import alfredo from '../images/continental/alfredo.jpeg';
import veggies from '../images/continental/veggies.jpeg';
import shrimp from '../images/continental/shrimp.jpeg';
import greek from '../images/continental/greek.jpeg';

const images = [spaegatti, salad,fishchips,grilled,soup,beef, alfredo,veggies,shrimp,greek];

const Continental = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/recipes/continental')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {recipes.map((recipe, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="d-flex justify-content-center">
              <Cards
                image={images[index % images.length]}
                title={recipe.name}
                text={recipe.description}
                linkComponent={
                  <Link
                    to={`/recipes/continental/${recipe._id}`}
                    className="btn btn-primary"
                  >
                    Explore
                  </Link>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Continental;
