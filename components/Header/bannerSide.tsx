import React, { Fragment } from "react";
import data from "@/app/data.json";
import { SiAstro } from "react-icons/si";
import { FaGithub, FaInstagram, FaReact, FaTwitter } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";

type IconName = "SiAstro" | "FaReact" | "RiNextjsFill";

const BannerSide = () => {
  const iconMap: Record<string, IconType> = {
    SiAstro: SiAstro,
    FaReact: FaReact,
    RiNextjsFill: RiNextjsFill,
  };
  const icons: Record<string, IconType> = {
    FaInstagram: FaInstagram,
    FaGithub: FaGithub,
    FaTwitter: FaTwitter,
  };

  return (
    <Fragment>
      <div className="absolute top-0 left-0 p-10 mt-5">
        {data.Profile.map((item, idx) => (
          <div key={`p_${idx}`} className="p-2 text-gray-300  ">
            <p className="font-bold text-secondary">{item.nama}</p>
            {item.text.map((textItem, index) => (
              <p key={`profile_${index}`} className="">
                {textItem}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 p-10  text-end mt-5">
        {data.Skills.map((item, idx) => (
          <div key={`data_${idx}`} className="p-2   text-gray-300 ">
            <p className="font-bold text-secondary">{item.nama}</p>
            <div className="flex gap-4">
              <span>Astro</span>
              <span>Next Js</span>
              <span>Prisma</span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-0 left-0 p-10">
          {data.SocialLinks.map((item, idx) => (
            <div key={idx} className="p-2 border-b-2 border-l-2 border-secondary text-gray-400">
              <p className="font-bold text-secondary">{item.nama}</p>
              <div className="flex gap-4">
              {item.text.map((icon, iconIdx) => {
                const IconComponent = icons[icon];
                return (
                  <div key={`socialLinks_${iconIdx}`} className="text-3xl">
                    <IconComponent /> 
                  </div>
                );
              })}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 right-0  text-end p-10">
          {data.experience.map((item, idx) => (
            <div key={idx} className="p-2 border-b-2 border-r-2 border-gray-500 text-gray-400">
              <p className="font-bold text-neutral-800">{item.nama}</p>
              {item.text.map((textItem, index) => (
                <p key={`experience_${index}`}>{textItem}</p>
              ))}
            </div>
          ))}
        </div> */}
    </Fragment>
  );
};

export default BannerSide;
