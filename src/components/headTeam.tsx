"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeadTeam() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-evenly">
      <div className="w-full font-bold text-4xl mb-10 font-serif text-center">
        <h1 className="font-serif">Tim Kami</h1>
      </div>
      <div
        className="flex relative overflow-hidden flex-col mx-auto text-center w-64 h-80 mb-5 shadow-xl rounded-lg"
        data-aos="fade-down"
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={"/head-marketing.jpg"}
          alt="Head of Marketing"
          className="hover:saturate-200"
          priority
        />
        <div className="absolute bottom-5 w-full text-center">
          <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-2 py-3 opacity-90">
            <p className="font-bold font-mono text-xl z-10">Quinjel</p>
            <p className="font-bold font-mono z-10">Head of Marketing</p>
          </div>
        </div>
      </div>
      <div
        className="flex relative overflow-hidden flex-col mx-auto text-center w-64 h-80 mb-5 shadow-xl rounded-lg"
        data-aos="fade-down"
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={"/head-chef.jpg"}
          alt="Head Chef"
          className="hover:saturate-200"
          priority
        />
        <div className="absolute bottom-5 w-full text-center">
          <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-2 py-3 opacity-90">
            <p className="font-bold font-mono text-xl z-10">
              Christopher Nolan
            </p>
            <p className="font-bold font-mono z-10">Head Chef</p>
          </div>
        </div>
      </div>
      <div
        className="flex relative overflow-hidden flex-col mx-auto text-center w-64 h-80 mb-5 shadow-xl rounded-lg"
        data-aos="fade-down"
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={"/head-barista.jpg"}
          alt="Head Barista"
          className="hover:saturate-200"
          priority
        />
        <div className="absolute bottom-5 w-full text-center">
          <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-2 py-3 opacity-90">
            <p className="font-bold font-mono text-xl z-10 ">Tom Hardy</p>
            <p className="font-bold font-mono z-10">Head Barista</p>
          </div>
        </div>
      </div>
    </div>
  );
}
