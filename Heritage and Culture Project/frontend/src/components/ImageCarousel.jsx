import React from "react";

import "./ImageCarousel.css"; // Create this file for the custom styles

function ImageCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1577083753695-e010191bacb5?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpd2FsaXxlbnwwfHwwfHx8MA%3D%3D"
            className="d-block w-100"
            alt="Diwali"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1705861146215-893c716481e7?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjBnYXRlfGVufDB8fDB8fHww"
            className="d-block w-100"
            alt="India Gate"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1716573260891-23ad993e8833?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FuZ2ElMjBhcnRpfGVufDB8fDB8fHww"
            className="d-block w-100"
            alt="kathak"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1551757891-24a8dabd2708?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbGl8ZW58MHx8MHx8fDA%3D"
            className="d-block w-100"
            alt="Holi"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageCarousel;
