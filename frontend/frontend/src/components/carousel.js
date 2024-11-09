import React from "react";
import Carousel1 from '../images/Carousel1.jpg';
import CraveCraft from '../images/CraveCraft.png';
import Carousel2 from '../images/Carousel2.jpg';
import Carousel3 from '../images/Carousel3.jpg';

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      style={{ width: "97%", height: "500px", margin: "20px auto" }} // Custom width, height, and margin
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner" style={{ height: "100%" }}>
        <div className="carousel-item active">
          <img src={CraveCraft} className="d-block w-100" style={{ height: "100%", objectFit: "fill" }} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={Carousel1} className="d-block w-100" style={{ height: "100%", objectFit: "fill" }} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={Carousel3} className="d-block w-100" style={{ height: "100%", objectFit: "fill" }} alt="Third slide" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
