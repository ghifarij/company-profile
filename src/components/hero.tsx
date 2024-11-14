"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex relative w-screen h-[20vh] md:h-[87vh] overflow-hidden justify-center max-w-full">
      <Image
        src={"/Hero.jpg"}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
        className="hidden md:block"
      />
      <div
        className="absolute mt-12 md:mt-28 text-[#31511E] md:text-white opacity-90"
        data-aos="zoom-out"
      >
        <h1 className="font-extrabold text-center p-4 md:p-0 md:text-center text-5xl md:text-9xl font-playfair">
          TANAM KOPI
        </h1>
        <p className="mt-5 hidden md:block text-start p-4 md:p-0 md:text-center text:xl md:text-2xl font-opensans w-2/3 md:w-full">
          Perjalanan baru mengelilingi Nusantara melalui satu cangkir kopi!
        </p>
      </div>
    </div>
  );
}
