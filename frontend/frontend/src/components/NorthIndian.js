import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from './cards';
import cholebhature from '../images/CholeBhature.jpg';
import Butterchick from '../images/download (3).jpeg';
import palakpaneer from '../images/palakpan.jpeg';
import rajma from '../images/rajma.jpeg';
import paneerTikka from '../images/Paneer-Tikka-Featured.jpg';
import alooGobi from '../images/aloo gobi.jpeg';
import bhindi from '../images/bhindi.jpeg';
import kadhai from '../images/kadhai.jpeg';
import dal from '../images/dal.jpeg';
import matarPaneer from '../images/matarPan.jpeg';

const images = [Butterchick,palakpaneer,cholebhature,rajma,paneerTikka,alooGobi,bhindi,kadhai,dal,matarPaneer];

const NorthIndian = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the backend
    axios
      .get('http://localhost:4000/api/recipes/northindian')
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
                    to={`/recipes/northindian/${recipe._id}`}
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

export default NorthIndian;
