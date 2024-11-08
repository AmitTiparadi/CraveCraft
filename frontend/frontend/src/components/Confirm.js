import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirm = ({ id }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the updated recipe page
    navigate(`/`);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "'Arial', sans-serif", backgroundColor: "#f7f7f7" }}>
      <h1 style={{ fontSize: "2rem", color: "#28a745" }}>Recipe Updated Successfully!</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
        Your recipe has been successfully updated.
      </p>
      <button
        onClick={handleGoBack}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "4px"
        }}
      >
        Go To Home
      </button>
    </div>
  );
};

export default Confirm;
