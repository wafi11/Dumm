import React, { useEffect } from "react";
import useStoreApi from "../hooks/useApi";
import { FaStar } from "react-icons/fa";
import { useCartSlice } from "../hooks/CartSlice";
import useFakeStore from "../hooks/FakeStoreApi";
import Slider from "react-slick";
import ButtonFilter from "../utils/ButtonFilter";
import { Link } from "react-router-dom";

const TopProduct = () => {
  const { categorys, fetchProductCategory, products } = useFakeStore();
  const { cart, addToCart } = useCartSlice();
  useEffect(() => {
    fetchProductCategory();
  }, [categorys]);
  var settings = {
    dots: false,
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

  const handleClikBuy = (item) => {
    addToCart(item);
  };
  return (
    <div className="py-10">
      <div className="container">
        <div className=" grid sm:grid-cols-2 mb-20 gap-0 sm:gap-3">
          <div className="flex flex-col text-left">
            <p className="text-sm" data-aos="fade-up">
              Top Rated Product for you
            </p>
            <h1 className="text-3xl font-bold" data-aos="fade-up">
              Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-900">
              Top-Rated indeed!,Let's pick before soldout
            </p>
          </div>
          <ButtonFilter />
        </div>
        <Slider {...settings}>
          {products?.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-neutral-200 dark:bg-orange-200/50
                hover:bg-neutral-600 dark:hover:bg-orange-900
                hover:text-white relative shadow-xl duration-300
                group max-w-[300px] h-[400px]">
              <div className="h-[180px]">
                <Link to={`/products/${item.id}`} key={item.id}>
                  <img
                    src={item.images[0]}
                    alt="../"
                    className="max-w-[140px] block mx-auto h-[200px] object-cover
                    transform -translate-y-12 group:hover:scale-105 duration-300 drop-shadow-xl"
                  />
                </Link>
              </div>
              {/* details */}
              <div className="p-4 text-center">
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold h-20 pt-5">{item.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => handleClikBuy(item)}
                  className="dark:bg-orange-700 bg-slate-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-yellow-500">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopProduct;
