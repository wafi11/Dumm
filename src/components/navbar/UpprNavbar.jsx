import React from "react";
import Search from "./Search";
import ThemeButton from "./ThemeButton";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/logo2.png";

const UpprNavbar = () => {
  return (
    <div className="bg-primary/40 py-3 ">
      <div className="container flex justify-between items-center">
        <div>
          <a
            className="uppercase font-bold text-2xl sm:text-3xl flex gap-2 text-teal-700 dark:text-white"
            href="/">
            Vitestore
          </a>
        </div>
        {/* Search */}
        <Search />
      </div>
    </div>
  );
};

export default UpprNavbar;
