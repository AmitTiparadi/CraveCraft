import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from './cards';
import con from '../images/image-3.png';

const images = [con, ];

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
