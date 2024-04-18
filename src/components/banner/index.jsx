import React from "react";
import { GrMoney, GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] w-full flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="https://img.freepik.com/free-photo/portrait-happy-lady-sunglasses-standing-with-colorful-shopping-bags-hands-pink-background-young-woman-standing-white-shirt-denim-shorts_574295-1182.jpg?w=740&t=st=1711888145~exp=1711888745~hmac=75a68fd61d22857806f40ad5b2ac1b534a577841fd4a848176b5ef904b77874c"
              alt="../"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl text-gray-500">
              Ramadhan Sale upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-400 text-sm tracking-wide leading-5">
              The special moments in the Ramadan month! Explore our diverse
              collection and enjoy exclusive discounts just for you.
            </p>
            <div className="flex flex-col gap-4">
              <div
                data-aos="fade-up"
                data-oas-delay={0}
                className="flex items-center gap-4 ">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Product</p>
              </div>
              <div
                data-aos="fade-up"
                data-oas-delay={200}
                className="flex items-center gap-4 ">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Fast Delivery</p>
              </div>
              <div
                data-aos="fade-up"
                data-oas-delay={400}
                className="flex items-center gap-4 ">
                <GrMoney className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy payment method</p>
              </div>
              <div
                data-aos="fade-up"
                data-oas-delay={600}
                className="flex items-center gap-4 ">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
