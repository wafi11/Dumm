import React from "react";
import Slider from "react-slick";
import TestimonialData from "./data";
import { data } from "autoprefixer";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container justify-center items-center">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-down" className="text-sm text-primary">
            What customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Customer review for our Product!
          </p>
        </div>
        {/* Testimonial Card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((test) => (
              <div className="my-6" key={test.id}>
                <div className="flex flex-col justify-center items-center gap-4 shadow-lg py-6 px-4 mx-4 rounded-xl dark-bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4 r">
                    <img
                      src={test.img}
                      alt="../"
                      className="rounded-full w-20 h-20 "
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-lg text-primary font-semibold">
                        {test.name}
                      </h1>
                      <p className="text-sm font-normal">{test.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
