import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__title">Testimonials</div>
      {/* <div className="testimonial__underline" /> */}
      <TestimonialCarousel />
    </div>
  );
};

export default Testimonial;
