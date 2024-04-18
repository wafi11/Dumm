import Slider from "react-slick";
import { useEffect, useState } from "react";
import { ApiProductList } from "../../api/api";
const Hero = ({ ImageList }) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="overflow-hidden relative min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[0]"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList?.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center gap-4 pt-12 
            sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    className="text-5xl sm:text-6xl md:text-7xl font-bold"
                    dtaa-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="once">
                    {item.title}
                  </h1>
                  <p
                    className="text-sm"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100">
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300">
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-100 
                duration-200 text-white py-2 px-4 rounded-md">
                      more info
                    </button>
                  </div>
                </div>
                {/* image */}
                <div className="order-1 sm:order-2 ">
                  <div
                    className="relative z-10"
                    data-aos="zoom-in"
                    data-aos-once="true">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120
                object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
