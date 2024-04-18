import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const SocialLink = () => {
  return (
    <div>
      <div className="flex items-center justify-center  gap-3 mt-6">
        <a href="#">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="#">
          <FaFacebook className="text-3xl" />
        </a>
        <a href="#">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
      <div className="mt-6 ">
        <div className="flex items-center gap-3 mt-3 text-center justify-center">
          <FaLocationArrow />
          <p>Jakarta, Indonesia</p>
        </div>
        <div className="flex items-center gap-3 mt-3 text-center justify-center">
          <FaMobileAlt />
          <p>+6282226197047</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
