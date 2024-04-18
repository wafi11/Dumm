import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ThemeButton from "./ThemeButton";
import { FaCartShopping } from "react-icons/fa6";
import { useModalStore } from "../hooks/useModal";
import { useCartSlice } from "../hooks/CartSlice";
import { Link, NavLink, useSearchParams } from "react-router-dom";
const Search = () => {
  const { onOpen, modal, onClose } = useModalStore();
  const { amount, setAmount, itemAmount, cart } = useCartSlice();
  const [searchQuery, setSearchQuery] = useState();

  // const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    itemAmount();
  }, []);

  const handleModal = () => {
    onOpen();
  };
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="group relative hidden sm:block">
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="W-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 rounded-md border px-2 py-1 focus:outline-none focus:border-1
          focus:border-teal-400 dark:border-teal-300 dark:bg-teal-400"
        />
        <a rel="stylesheet" href={`/search?q=${searchQuery}`}>
          <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
        </a>
      </div>
      <div className="relative ">
        <button
          onClick={() => handleModal()}
          className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white p-2 rounded-xl
        flex items-center gap-3 group">
          <span
            className={`${
              amount ? "bg-red-500" : "bg-transparent"
            }text-white  w-5 h-5 left-2 rounded-full -top-3  absolute cursor-pointer `}>
            {amount}
          </span>
          <FaCartShopping className="text-xl text-white drop-shadow-md  cursor-pointer" />
        </button>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Search;
