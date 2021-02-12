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
        "My family has the protection I have been wanting to provide them.
        <br />
        <br />
        Finding the right policy was easy with Paul. I knew what I wanted, and
        Paul knew how to get me the coverage that fit my needs.
        <br />
        <br />
        Ontins will be my first call for all of my insurance needs."
        <div className="testimonial__author">Tony B</div>
      </div>

      <div className="testimonial__body">
        "Ontins was able to get my the insurance and certificates I needed for
        my business.
        <br />
        <br />
        Paul worked to get me the right coverage for my specialty business.
        Having professional advice was invaluable when creating my policy.
        <br />
        <br />I am glad to have worked with Ontins, and I would recommend Ontins
        to my friends!"
        <div className="testimonial__author">-Samantha K</div>
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
