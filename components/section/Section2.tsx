import data from "@/app/data.json";
import React from "react";
import { TextOpacity } from "../ui/text-opacity";
import Rounded from "../utils/Rounded";
import Link from "next/link";

const Section2 = () => {
  return (
    <section className="w-full min-h-screen max-h-[800px] h-full container flex  justify-center items-center ">
      <div className="flex  flex-col md:flex-row gap-5">
        <TextOpacity
          desc={data.phrase1.nama}
          className="text-[20px]  lg:text-[2vw]"
        />
        <div className="space-y-5">
          <TextOpacity desc={data.phrase2.nama} className="text-[20px]" />
          <Link href={"/about"} className="flex justify-center w-full">
            <Rounded className="">
              <p>About Me</p>
            </Rounded>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
