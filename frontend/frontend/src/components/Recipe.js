// // src/RecipePage.js
// import React from 'react';
// import './RecipePage.css'; // Import the CSS file for styling
// import poha from '../images/poha.jpg';

// const RecipePage = () => {
//     return (
//         <div className="recipe-page"> {/* Scoped styling */}
//             <div className="recipe-container">
//                 <header>
//                     <h1>Poha</h1>
//                 </header>
//                 <section className="description">
//                     <h2>Description</h2>
//                     <p>Poha is a savory Indian breakfast made from flattened rice, spiced with turmeric, mustard seeds, and green chilies, then mixed with onions, peas, and crunchy peanuts. Topped with fresh coriander and a squeeze of lemon, it’s a light yet flavorful dish.</p>
//                 </section>
//                 <section className="ingredients">
//                     <h2>Ingredients</h2>
//                     <ul>
//                         <li>1 cup flattened rice (poha)</li>
//                         <li>1 medium onion, finely chopped</li>
//                         <li>1 green chili, chopped (adjust to taste)</li>
//                         <li>1/4 teaspoon turmeric powder</li>
//                         <li>1 teaspoon mustard seeds</li>
//                         <li>8-10 curry leaves</li>
//                         <li>2 tablespoons peanuts</li>
//                         <li>1-2 tablespoons oil</li>
//                         <li>Salt, to taste</li>
//                         <li>Fresh coriander leaves, chopped (for garnish)</li>
//                         <li>Lemon wedge (for garnish)</li>
//                         {/* Add more ingredients as needed */}
//                     </ul>
//                 </section>
//                 <section className="procedure">
//                     <h2>Procedure</h2>
//                     <ol>
//                         <li>Step 1: Rinse the poha under running water until soft, then drain and set aside.</li>
//                         <li>Step 2: Heat oil in a pan and add mustard seeds. Once they splutter, add curry leaves, green chili, and peanuts.</li>
//                         <li>Step 3: Add chopped onions and sauté until translucent.</li>
//                         <li>Step 4: Add turmeric powder and salt, then mix well.</li>
//                         <li>Step 5: Add the rinsed poha and gently mix until well combined.</li>
//                         <li>Step 6: Cover and cook for 2-3 minutes on low heat.</li>
//                         <li>Step 7: Garnish with fresh coriander leaves and a squeeze of lemon juice before serving.</li>
//                         <li>Step 8: Serve hot and enjoy!</li>
//                         <li>Step 9: Store any leftovers in an airtight container in the refrigerator.</li>
//                         <li>Step 10: Reheat before serving.</li>
//                         {/* Add more steps as needed */}
//                     </ol>
//                 </section>
//                 <section className="recipe-images">
//                     <h2>Images</h2>
//                     <div className="image-gallery">
//                         <img src={poha} alt="Poha dish" /> {/* Added image of poha */}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default RecipePage;


// src/components/RecipePage.js

import React from 'react';
import './RecipePage.css'; // Ensure this file is created and linked properly
import poha from '../images/poha.jpg';

const RecipePage = () => {
  return (
    <div className="recipe-page">
      <div className="recipe-container">
        <header>
          <h1>Poha</h1>
        </header>
        <section className="description">
          <h2>Description</h2>
          <p>Poha is a savory Indian breakfast made from flattened rice, spiced with turmeric, mustard seeds, and green chilies, then mixed with onions, peas, and crunchy peanuts. Topped with fresh coriander and a squeeze of lemon, it’s a light yet flavorful dish.</p>
        </section>
        <section className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 cup flattened rice (poha)</li>
            <li>1 medium onion, finely chopped</li>
            <li>1 green chili, chopped (adjust to taste)</li>
            <li>1/4 teaspoon turmeric powder</li>
            <li>1 teaspoon mustard seeds</li>
            <li>8-10 curry leaves</li>
            <li>2 tablespoons peanuts</li>
            <li>1-2 tablespoons oil</li>
            <li>Salt, to taste</li>
            <li>Fresh coriander leaves, chopped (for garnish)</li>
            <li>Lemon wedge (for garnish)</li>
          </ul>
        </section>
        <section className="procedure">
          <h2>Procedure</h2>
          <ol>
            <li>Step 1: Rinse the poha under running water until soft, then drain and set aside.</li>
            <li>Step 2: Heat oil in a pan and add mustard seeds. Once they splutter, add curry leaves, green chili, and peanuts.</li>
            <li>Step 3: Add chopped onions and sauté until translucent.</li>
            <li>Step 4: Add turmeric powder and salt, then mix well.</li>
            <li>Step 5: Add the rinsed poha and gently mix until well combined.</li>
            <li>Step 6: Cover and cook for 2-3 minutes on low heat.</li>
            <li>Step 7: Garnish with fresh coriander leaves and a squeeze of lemon juice before serving.</li>
          </ol>
        </section>
        <section className="recipe-images">
          <h2>Images</h2>
          <div className="image-gallery">
            <img src={poha} alt="Poha dish" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipePage;
