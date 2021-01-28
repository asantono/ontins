import React from "react";
import { Carousel } from "react-responsive-carousel";
import business from "../img/business.jpg";
import car from "../img/car.jpg";
import pros from "../img/pros.jpg";
import travel from "../img/travel.jpg";
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
          <CarouselOverlay title="Car Insurance" />
          <img className="carousel__image" key="img" src={car} alt="carousel" />
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
      </Carousel>
    </div>
  );
};

export default CarouselOne;
