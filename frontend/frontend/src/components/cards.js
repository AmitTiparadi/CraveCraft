// import React from 'react';

// const Cards = ({ image, title, text, linkComponent }) => {
//   return (
//     <div
//       className="card shadow-sm"
//       style={{
//         width: "18rem",
//         height: "25rem", // Fixed height for uniform card size
//         overflow: "hidden",
//         borderRadius: "10px", // Smooth card corners
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: "100%",
//           height: "12rem",
//           objectFit: "cover",
//           borderTopLeftRadius: "10px",
//           borderTopRightRadius: "10px",
//         }}
//       />
//       <div
//         className="card-body"
//         style={{
//           padding: "1rem",
//           textAlign: "center", // Center-aligns text
//           flex: "1", // Pushes content to fill remaining space
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           <h5
//             className="card-title"
//             style={{
//               margin: "0.5rem 0",
//               fontWeight: "bold", // Makes the title bold
//             }}
//           >
//             {title}
//           </h5>
//           <p
//             className="card-text"
//             style={{
//               fontSize: "1rem", // Increases the font size of the body text
//               color: "#555",
//             }}
//           >
//             {text}
//           </p>
//         </div>
//         <div style={{ marginTop: "1rem" }}>
//           {/* Change button text to "Recipes" */}
//           {React.cloneElement(linkComponent, {}, "Recipes")}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


// src/components/cards.js

import React from 'react';

const Cards = ({ image, title, text, linkComponent }) => {
  return (
    <div
      className="card shadow-sm"
      style={{
        width: "18rem",
        height: "25rem",
        overflow: "hidden",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#fff",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "12rem",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div
        className="card-body"
        style={{
          padding: "1rem",
          textAlign: "center",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h5 className="card-title" style={{ fontWeight: "bold" }}>{title}</h5>
          <p className="card-text" style={{ color: "#bdbdbd" }}>{text}</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          {React.cloneElement(linkComponent, {}, "Recipes")}
        </div>
      </div>
    </div>
  );
};

export default Cards;
