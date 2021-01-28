import React from "react";

const CarouselOverlay = (props) => {
  const goToForm = () => {
    document.getElementById("name").focus();
  };
  const { title } = props;
  return (
    <div className="carousel__image--overlay">
      <div className="carousel__image--wrapper">
        <div className="carousel__left">
          <div className="carousel__left--title">{title}</div>
          <div className="carousel__left--subtitle">Protected</div>
          <div className="carousel__left--tagline">when you need it most</div>
          <div className="carousel__left--story">
            Enjoy life to the fullest and have peace of mind
          </div>
        </div>
        <div className="carousel__right">
          <input
            className="carousel__right--button"
            type="submit"
            value="Let's Talk Today"
            onClick={() => goToForm()}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselOverlay;
