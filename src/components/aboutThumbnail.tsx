"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutThumbnail() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full md:w-2/5 px-4">
      <div
        className="flex relative w-52 h-52 md:w-96 md:h-96 overflow-hidden mx-auto rounded-xl"
        data-aos="fade-right"
      >
        <Image
          src={"/company-overview.jpg"}
          alt="About Company"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
