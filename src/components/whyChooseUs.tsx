"use client";

import { GiCoffeeBeans, GiCoffeeMug, GiCoffeePot } from "react-icons/gi";
import CountUp from "react-countup";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col text-center items-center pb-14">
      <h1 className="font-bold text-4xl font-serif my-2 mb-10">
        Mengapa Memilih Tanam Kopi
      </h1>
      <div className="flex w-[90%] flex-col md:flex-row justify-evenly">
        <div>
          <GiCoffeeBeans className="text-9xl mx-auto text-[#6F4E37]" />
          <p className="mt-3 pb-5 text-xl">
            <CountUp
              end={10000}
              duration={5}
              className="font-bold text-[#31511E]"
            />
            + Kg Biji kopi terjual
          </p>
        </div>
        <div>
          <GiCoffeePot className="text-9xl mx-auto" />
          <p className="mt-3 pb-5 text-xl">
            <CountUp
              end={1200}
              duration={5}
              className="font-bold text-[#31511E]"
            />
            + Pcs Alat seduh terjual
          </p>
        </div>
        <div>
          <GiCoffeeMug className="text-9xl mx-auto text-[#88304E]" />
          <p className="mt-3 pb-5 text-xl">
            <CountUp
              end={500}
              duration={5}
              className="font-bold text-[#31511E]"
            />
            + Pcs Perlengkapan terjual
          </p>
        </div>
      </div>
    </div>
  );
}
