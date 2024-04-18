import React from "react";
import SocialLink from "./SocialLink";

const FooterLink = () => {
  const data = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Men",
      link: "/",
    },
    {
      id: 3,
      name: "Women",
      link: "/",
    },
    {
      id: 4,
      name: "Kids",
      link: "/",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-3  col-span-2 md:pl-10 justify-center items-center text-center ">
        <div>
          <div className="py-8 px-4 ">
            <h1 className="text-xl font-bold mb-3 ">General</h1>
            <ul className="flex flex-col gap-3">
              {data.map((item) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid col-span-2 md:pl-10 justify-center items-center text-center">
          <div className="py-8 px-2">
            <h1 className="text-xl font-bold mb-3 ">Links</h1>
            <ul className="flex flex-col gap-3">
              {data.map((item) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SocialLink />
    </>
  );
};

export default FooterLink;
