"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Timeline() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-wrap pb-10 md:pb-[60px] w-[70%] mx-auto">
      <h1 className="mx-auto font-bold text-4xl mb-2 font-serif mt-2">
        Sejarah Kami
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7 text-[#31511E]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2017</time>
            <div className="text-lg font-black">
              Awal Berdiri sebagai Coffee Roastery
            </div>
            <Image
              src="/roastery.jpg"
              alt="Awal mula berdiri"
              width={640}
              height={360}
              priority
              className="my-2"
              data-aos="fade-right"
            />
            <p>
              Tanam kopi didirikan pertama kali sebagai coffee roastery yang
              hanya menjual biji kopi.
            </p>
          </div>
          <hr className="bg-[#54473F]" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7 text-[#31511E]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">
              Transformasi menjadi Coffee Shop
            </div>
            <Image
              src="/coffee-shop.jpg"
              alt="Awal mula berdiri"
              width={640}
              height={360}
              loading="lazy"
              className="my-2"
              data-aos="fade-left"
            />
            <p>
              Berinovasi dari coffee roastery menjadi coffee shop agar pelanggan
              dapat menikmati seduhan kopi kami.
            </p>
          </div>
          <hr className="bg-[#54473F]" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7 text-[#31511E]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">
              Ekspansi Produk dengan Alat dan Perlengkapan Kopi
            </div>
            <Image
              src="/coffee-store.jpg"
              alt="Awal mula berdiri"
              width={640}
              height={360}
              loading="lazy"
              className="my-2"
              data-aos="fade-right"
            />
            <p>
              Kini tersedia peralatan menyeduh kopi manual maupun dengan mesin.
            </p>
          </div>
          <hr className="bg-[#54473F]" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7 text-[#31511E]"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">
              Pembukaan Cabang Baru di Jakarta
            </div>
            <Image
              src="/cabang.jpg"
              alt="Awal mula berdiri"
              width={640}
              height={360}
              className="my-2"
              loading="lazy"
              data-aos="fade-left"
            />
            <p>
              Meluaskan jangkauan Tanam Kopi dengan membuka cabang baru di
              Jakarta.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
