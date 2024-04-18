import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";

const ThemeButton = () => {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkmode(true);
  }, []);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center 
        dark:bg-secondary bg-teal-500 cursor-pointer
        rounded-full p-1"
      onClick={() => setDarkmode(!darkmode)}>
      <FiMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-teal-500 w-6 h-6 rounded-full shadow-md 
        transfrom transition-transform duration-300"
        style={darkmode ? { left: "2px" } : { right: "2px" }}></div>
      <CiLight className="ml-auto text-yellow-500" size={18} />
    </div>
  );
};

export default ThemeButton;
