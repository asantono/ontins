import React from "react";
import { Carousel } from "react-responsive-carousel";
import business from "../img/business.jpg";
import car from "../img/car.jpg";
import trucking from "../img/trucking.png";
import health from "../img/health.jpg";
import travel from "../img/travel.jpg";
import home from "../img/home.jpg";
// import coverthree from '../../img/salemade.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselOverlay from "./CarouselOverlay";
// import SmallSearch from '../../widgets/SmallSearch';

const CarouselOne = () => {
  // const goToForm = () => {
  //   document.getElementById("name").focus();
  // };

  return (
    <div className="carousel">
      <Carousel
        showStatus={false}
        showThumbs={false}
        swipeable
        infiniteLoop
        autoPlay
        stopOnHover
        interval={5000}
      >
        <div>
          <CarouselOverlay title="Auto Insurance" />
          <img className="carousel__image" key="img" src={car} alt="carousel" />
        </div>
        <div>
          <CarouselOverlay title="Home Insurance" />
          <img
            className="carousel__image"
            key="img"
            src={home}
            alt="carousel"
          />
        </div>
        <div>
          <CarouselOverlay title="Business Insurance" />
          <img
            className="carousel__image"
            key="img"
            src={business}
            alt="carousel"
          />
        </div>

        <div>
          <CarouselOverlay title="Travel Insurance" />
          <img
            className="carousel__image"
            key="img"
            src={travel}
            alt="carousel"
          />
        </div>

        <div>
          <CarouselOverlay title="Trucking Insurance" />
          <img
            className="carousel__image"
            key="img"
            src={trucking}
            alt="carousel"
          />
        </div>

        <div>
          <CarouselOverlay title="Health Insurance" />
          <img
            className="carousel__image"
            key="img"
            src={health}
            alt="carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselOne;
