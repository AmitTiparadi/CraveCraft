// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const RecipeDetails = () => {
//   const { id } = useParams(); // Get recipe ID from URL params
//   const [recipe, setRecipe] = useState({ name: "", description: "", ingredients: [], directions: "" });
//   const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
//   const [updatedRecipe, setUpdatedRecipe] = useState({ name: "", description: "", ingredients: [], directions: "" }); // State to hold updated data

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/recipes/category/${id}`)
//       .then((response) => {
//         setRecipe(response.data);            // Sets the main recipe data
//         setUpdatedRecipe(response.data);     // Initializes updatedRecipe with fetched data
//       })
//       .catch((error) => {
//         console.error('Error fetching recipe details:', error);
//       });
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedRecipe((prev) => ({
//       ...prev,
//       [name]: name === "ingredients" ? value.split('\n') : value // Convert ingredients textarea input to array
//     }));
//   };

//   const handleUpdate = () => {
//     axios
//       .patch(`http://localhost:4000/api/recipes/${id}`, updatedRecipe)
//       .then((response) => {
//         setRecipe(response.data); // Use backend response to set recipe
//         setIsEditing(false);      // Exit edit mode
//       })
//       .catch((error) => {
//         console.error('Error updating recipe:', error);
//       });
//   };

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mt-5 p-4" style={{ maxWidth: "700px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" }}>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             name="name"
//             value={updatedRecipe.name}
//             onChange={handleInputChange}
//             style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#333", width: "100%", marginBottom: "1rem" }}
//           />
//           <textarea
//             name="description"
//             value={updatedRecipe.description}
//             onChange={handleInputChange}
//             style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6", width: "100%", height: "80px" }}
//           />
//           <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Ingredients</h3>
//           <textarea
//             name="ingredients"
//             value={updatedRecipe.ingredients.join('\n')}
//             onChange={handleInputChange}
//             style={{ fontSize: "1.1rem", fontWeight: "500", color: "#444", width: "100%", height: "100px" }}
//           />
//           <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Directions</h3>
//           <textarea
//             name="directions"
//             value={updatedRecipe.directions}
//             onChange={handleInputChange}
//             style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6", width: "100%", height: "120px" }}
//           />
//         </>
//       ) : (
//         <>
//           <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#333", marginBottom: "1rem" }}>{recipe.name}</h1>
//           <p style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6" }}>{recipe.description}</p>
//           <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Ingredients</h3>
//           <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#444" }}>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index} style={{ fontSize: "1.1rem", fontWeight: "500", marginBottom: "0.5rem" }}>{ingredient}</li>
//             ))}
//           </ul>
//           <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Directions</h3>
//           <p style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6" }}>{recipe.directions}</p>
//         </>
//       )}

//       <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem" }}>
//         {isEditing ? (
//           <button
//             onClick={handleUpdate}
//             style={{ backgroundColor: "#28a745", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontSize: "1.1rem", fontWeight: "600", marginRight: "1rem" }}
//           >
//             Save
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsEditing(true)}
//             style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontSize: "1.1rem", fontWeight: "600" }}
//           >
//             Update
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecipeDetails;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // import useNavigate

const RecipeDetails = () => {
  const { category, id } = useParams(); // Get both category and id
  const navigate = useNavigate(); // Initialize navigate
  const [recipe, setRecipe] = useState({ name: "", description: "", ingredients: [], directions: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({ name: "", description: "", ingredients: [], directions: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/recipes/category/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setUpdatedRecipe(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe((prev) => ({
      ...prev,
      [name]: name === "ingredients" ? value.split('\n') : value
    }));
  };

  const handleUpdate = () => {
    axios
      .patch(`http://localhost:4000/api/recipes/${id}`, updatedRecipe)
      .then((response) => {
        setRecipe(response.data);
        setIsEditing(false);
        navigate(`/recipes/${id}`); // Redirect to /recipes/:id
      })
      .catch((error) => {
        console.error('Error updating recipe:', error);
      });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5 p-4" style={{ maxWidth: "700px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={updatedRecipe.name}
            onChange={handleInputChange}
            style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#333", width: "100%", marginBottom: "1rem" }}
          />
          <textarea
            name="description"
            value={updatedRecipe.description}
            onChange={handleInputChange}
            style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6", width: "100%", height: "80px" }}
          />
          <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Ingredients</h3>
          <textarea
            name="ingredients"
            value={updatedRecipe.ingredients.join('\n')}
            onChange={handleInputChange}
            style={{ fontSize: "1.1rem", fontWeight: "500", color: "#444", width: "100%", height: "100px" }}
          />
          <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Directions</h3>
          <textarea
            name="directions"
            value={updatedRecipe.directions}
            onChange={handleInputChange}
            style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6", width: "100%", height: "120px" }}
          />
        </>
      ) : (
        <>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#333", marginBottom: "1rem" }}>{recipe.name}</h1>
          <p style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6" }}>{recipe.description}</p>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Ingredients</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#444" }}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} style={{ fontSize: "1.1rem", fontWeight: "500", marginBottom: "0.5rem" }}>{ingredient}</li>
            ))}
          </ul>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#333", marginTop: "2rem" }}>Directions</h3>
          <p style={{ fontSize: "1.2rem", fontWeight: "500", color: "#555", lineHeight: "1.6" }}>{recipe.directions}</p>
        </>
      )}

      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem" }}>
        {isEditing ? (
          <button
            onClick={handleUpdate}
            style={{ backgroundColor: "#28a745", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontSize: "1.1rem", fontWeight: "600", marginRight: "1rem" }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: "4px", cursor: "pointer", fontSize: "1.1rem", fontWeight: "600" }}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
