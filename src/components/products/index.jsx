import React, { useEffect, useState } from "react";
import { ApiProductList } from "../../api/api";
import { FaStar } from "react-icons/fa";
import useFakeStore from "../hooks/FakeStoreApi";

const Products = () => {
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
  const { fetchProducts, category } = useFakeStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="pt-14 pb-12 bg-neutral-100">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-down" className="text-sm text-primary">
            Top Selling
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Popular this week, you can choose anything!
          </p>
        </div>
        {/* Body */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {category.products?.map((data) => (
              <div
                key={data.id}
                className="space-y-3 "
                data-aos="fade-up"
                data-aos-delay={[0, 200, 400, 600, 800]}>
                <img
                  src={data.images[0]}
                  alt=""
                  className="h-[220px] w-[250px] bg-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <h3 className="font-semibold py-1">{data.brand}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center px-4" data-oas="fade-up">
            <button className="bg-teal-800 text-center mt-10 cursor-pointer py-1 px-4 rounded-md text-white">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
