import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaArrowUp, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex h-40 md:h-28 bg-[#EDE8D0] justify-center px-10 items-start pt-5 ">
      <div className="flex-1 text-[#31511E]">
        @2024 Hak Cipta Terpelihara{" "}
        <span className="font-semibold">PT Tanam Kopi Indonesia</span>
      </div>
      <div className="flex-1 md:flex justify-center hidden">
        <Link href={"/"}>
          <FaArrowUp className="text-2xl text-[#31511E]" />
        </Link>
      </div>
      <div className="flex flex-col flex-1 justify-end items-end">
        <p className="text-[#31511E] mb-1">Follow Tanam Kopi</p>
        <div className="flex gap-5">
          <FaFacebook className="text-blue-700 text-xl md:text-3xl" />
          <FaInstagram className="text-xl md:text-3xl" />
          <FaXTwitter className="text-xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
}
