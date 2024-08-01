"use client";
import React, { useEffect, useRef, useState } from "react";
import BannerSide from "../Header/bannerSide";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let direction = -1;
  let xPercent = 0;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
    <section className="h-screen w-full bg-accent px-10 relative overflow-hidden flex flex-col justify-end">
      <BannerSide />
      <div className="slider-container text-secondary">
        <div ref={slider} className="slider ">
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
      <p className="md:grid font-semibold absolute top-[50%] hidden left-2/3 transform -translate-x-1/2">
        <span className="text-secondary">Freelance</span>
        <span>Developer & Designer</span>
      </p>
      <div className="md:block hidden absolute bottom-0 left-1/2  transform -translate-x-1/2 z-10">
        <Image
          src={"/user.png"}
          width={1000}
          height={1000}
          className="w-full h-[450px]  lg:h-[550px] object-cover z-0 px-4"
          alt="/"
        />
      </div>
    </section>
  );
};

export default Banner;
