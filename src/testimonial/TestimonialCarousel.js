import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = () => {
  return (
    <Carousel
      className="testimonial__carousel"
      showStatus={false}
      showThumbs={false}
      swipeable
      infiniteLoop
      autoPlay
      stopOnHover
      interval={5000}
    >
      <div className="testimonial__body">
        "Here is a testimonial from one of your clients
        <br />
        <br />
        Paul worked to get me the right coverage for my specialty business.
        Having professional advive was invaluable when creating my policy.
        <br />
        <br />I am glad to have worked with Ontins, and I would reccomened
        Ontins to my friends!"
        <div className="testimonial__author">-Ontins User</div>
      </div>

      <div className="testimonial__body">
        "Here is a testimonial from one of your clients
        <br />
        <br />
        Paul worked to get me the right coverage for my specialty business.
        Having professional advive was invaluable when creating my policy.
        <br />
        <br />I am glad to have worked with Ontins, and I would reccomened
        Ontins to my friends!"
        <div className="testimonial__author">-Ontins User</div>
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
