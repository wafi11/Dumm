"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import data from "./data.json";
import Image from "next/image";
import { height, opacity, translate } from "@/components/utils/anim";

interface Item {
  nama: string;
  image: string;
  link: string;
}

interface Data {
  data: Item[];
}

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="bg-accent fixed w-full z-40 font-blogh-full text-secondary">
      <div className="flex justify-between uppercase text-[30px] font-normal relative px-10">
        <Link href={"/"} className="font-bebas ">
          Portofolio
        </Link>
        <div
          onClick={toggle}
          className="flex items-center  justify-center gap-2 cursor-pointer"
        >
          <svg
            className={`w-8 h-8 transition-transform duration-500 items-center ${
              isActive ? "rotate-45 transform translate-x-1.5" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transition-transform duration-500 ${
                isActive ? "transform translate-y-1.5 rotate-45" : ""
              }`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isActive ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
          <span className="">{isActive ? "Close" : "Menu"}</span>
        </div>
        {isActive && (
          <motion.div
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute top-10 z-50 bg-accent h-full flex justify-between left-0 w-full"
          >
            <div className="flex flex-col w-full text-[40px] leading-none ">
              <Body
                links={data.data}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
              <Footer />
            </div>
            <Images
              src={data.data[selectedLink.index].image}
              selectedLink={selectedLink}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerItems = [
    { text: "Made by:", detail: "Wafiuddin" },
    { text: "Typography:", detail: "Google Fonts" },
    { text: "Images:", detail: "Freepik, Envato" },
    { text: "Technology:", detail: "Next Js" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center text-[12px] uppercase  p-10">
      {footerItems.map((item, index) => (
        <ul
          key={`foter_${index}`}
          className="w-auto md:w-full overflow-hidden list-none p-0 "
        >
          <motion.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex "
          >
            <span className="text-[#9f9689]">{item?.text}</span>
            <span>{item.detail}</span>
          </motion.li>
        </ul>
      ))}
    </div>
  );
};

interface BodyProps {
  links: Item[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
}

const Body: React.FC<BodyProps> = ({
  links,
  selectedLink,
  setSelectedLink,
}) => {
  const getChars = (word: string) => {
    let chars: any = [];

    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 px-10 h-full md:h-[200px]  py-[50px] items-center">
      {links.map((item, index) => {
        const { nama, link } = item;
        return (
          <Link key={`links_${index}`} href={link}>
            <motion.p
              custom={[0.3, 0]}
              variants={translate}
              initial="initial"
              animate="enter"
              exit="exit"
              className={`relative flex  transition-all duration-500 cursor-pointer ${
                selectedLink.index === index ? "" : "blur-sm"
              }`}
              onMouseEnter={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            >
              {getChars(nama)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

interface ImagesProps {
  src: string;
  selectedLink: { isActive: boolean; index: number };
}

const Images: React.FC<ImagesProps> = ({ src, selectedLink }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? "open" : "closed"}
      className="block w-full h-[300px] relative"
    >
      <Image
        src={src}
        className="object-cover w-full p-5"
        fill={true}
        alt="image"
      />
    </motion.div>
  );
};
