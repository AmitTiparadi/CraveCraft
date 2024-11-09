import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from './cards';
import dosa from '../images/South/doss.jpeg';
import idli from '../images/Idli.jpg';
import vada from '../images/South/vada.jpeg';
import bisi from '../images/South/bisi.jpeg';
import pongal from '../images/South/pongal.jpeg';
import chicken from '../images/South/chicken.jpg';
import appam from '../images/South/appam.jpeg';
import rasam from '../images/South/rasam.jpeg';
import puttu from '../images/South/puttu.jpeg';
import fish from '../images/South/fish.jpeg';

const images = [dosa,idli,vada,bisi,pongal,chicken,appam,rasam,puttu,fish];

const SouthIndian = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/recipes/southindian')
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
                    to={`/recipes/southindian/${recipe._id}`}
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

export default SouthIndian;
