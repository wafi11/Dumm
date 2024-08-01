import React from "react";
import data from "../../data.json";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center h-[800px] sm:h-screen w-full text-white container gap-10  ">
      <div>
        <h1 className="text-5xl font-bold mb-2">Hi, I am Wafiuddin.</h1>
        <p className="text-[25px]">{data.text_about}</p>
      </div>
      <div>
        <p className="font-light text-lg">{data.text_about2}</p>
      </div>
      <button className="mt-[30px] flex justify-center w-full relative">
        <Link href={"/contact"}>
          <p
            className={`border-2 font-bebas border-gray-200 px-4 py-2 hover:bg-white hover:text-black rounded-lg w-fit text-center `}
          >
            Let's work Together
          </p>
        </Link>
      </button>
    </main>
  );
}
