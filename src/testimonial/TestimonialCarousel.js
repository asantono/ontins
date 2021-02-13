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
        "Excellent service, professional and prompt. I received great health
        insurance rates.
        <br />
        <br />
        Keep up the great work Paul!"
        <div className="testimonial__author">Jagtar M.</div>
      </div>

      <div className="testimonial__body">
        "Gets you some amazing home and auto rates, he is an experienced person.
        <br />
        <br />
        Highly recommend, wish I would have known him sooner."
        <div className="testimonial__author">Kahlid M.</div>
      </div>

      <div className="testimonial__body">
        "Very professional and replies back quickly. He worked to get the best
        home insurance rates for me.
        <br />
        <br />I wish him all the best."
        <div className="testimonial__author">Maya G.</div>
      </div>

      <div className="testimonial__body">
        "Offers friendly, quick services.
        <br />
        <br />
        He is very helpful in answering all questions and got me the best auto
        and home insurance rates."
        <div className="testimonial__author">Harshan K.</div>
      </div>

      <div className="testimonial__body">
        "Had a great experience working with Paul!
        <br />
        <br />
        He provides very good insurance rates and is definitely someone you can
        trust."
        <div className="testimonial__author">Saini Y.</div>
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
