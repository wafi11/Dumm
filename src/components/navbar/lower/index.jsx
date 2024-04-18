import React from "react";
import { FaCaretDown } from "react-icons/fa";

const LowerNavbar = () => {
  const dataLower = [
    {
      name: "Men",
      link: "/products",
    },
    {
      name: "Women",
      link: "/women",
    },
    {
      name: "Kids",
      link: "/kids",
    },
    {
      name: "Jewelery",
      link: "/jewelery",
    },
    {
      name: "Electronics",
      link: "/electronic",
    },
  ];

  const MenuDropDown = [
    {
      name: "Top Product",
      link: "/toptrending",
    },
    {
      name: "Best Seller",
      link: "/bestseller",
    },
    {
      name: "Top Rated",
      link: "/toprated",
    },
  ];
  return (
    <div className="flex justify-center">
      <ul className="sm:flex hidden items-center gap-4">
        {dataLower?.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="iniline-block pz-4 duration-200 hover:text-primary">
              {item.name}
            </a>
          </li>
        ))}
        <li className="group relative">
          <p className="flex items-center gap-[2px] py-2">
            Trending
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </p>
          <div
            className="absolute z-[9999] hidden group-hover:block w-[150px] 
          rounded-md bg-gray-300 text-gray-800 shadow-md">
            <ul className="">
              {MenuDropDown.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20 justify-center items-center text-center">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LowerNavbar;
