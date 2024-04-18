import React from "react";
import UpprNavbar from "./UpprNavbar";
import LowerNavbar from "./lower";

const Navbar = () => {
  return (
    <div className="shadow-md fixed w-full  bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
      <UpprNavbar />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
