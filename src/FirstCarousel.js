import React from 'react';
import "./FirstCarousel.css"

const FirstCarousel = () => {
  return (
    <>
      <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/slider/slider-6.png" className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/slider/slider-7.png" className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/slider/slider-7.png" className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
      </div>
    </>
  );
};

export default FirstCarousel;
