import React from "react";
import Image from "../../assets/footer-pattern.jpg";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";

const Footer = () => {
  const ftImage = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={ftImage} className="text-white ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  pb-44 pt-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-4xl text-xl font-bold sm:left text-justify mb-3 flex items-center gap-3">
              <img
                src="https://img.freepik.com/premium-photo/tote-bag-2d-cartoon-vector-illustration-white-backgroun_889056-29510.jpg?w=740"
                className="max-w-[50px] object-cover object-center"
              />
              Vitestore
            </h1>
            <p className="">Vitestore is e-commerce you can find anything</p>
          </div>
          <FooterLink />
        </div>
      </div>
    </div>
  );
};

export default Footer;
