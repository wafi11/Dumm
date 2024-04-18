import React from "react";
import bg from "../../assets/bg-green.jpg";

const Subscribe = () => {
  const bgColor = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 dark:bg-gray-800 text-black  mb-20"
      style={bgColor}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white">
            Get Notified About New Product!
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Send Your Complaint"
            className="w-full p-3 focus:outline-none text-black bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
