import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex h-40 md:h-28 bg-[#EDE8D0] justify-center px-10 items-start pt-5 ">
      <div className="flex-1 text-[#31511E]">
        @2024 Hak Cipta Terpelihara{" "}
        <span className="font-semibold">PT Tanam Kopi Indonesia</span>
      </div>
      <div className="flex flex-col flex-1 justify-end items-end">
        <p className="text-[#31511E] mb-1">Follow Tanam Kopi</p>
        <div className="flex gap-5">
          <Link href={"https://www.facebook.com/"} target="_blank">
            <FaFacebook className="text-blue-700 text-xl md:text-3xl" />
          </Link>
          <Link href={"https://www.instagram.com/"} target="_blank">
            <FaInstagram className="text-xl md:text-3xl text-[#e4405f]" />
          </Link>
          <Link href={"https://x.com/"} target="_blank">
            <FaXTwitter className="text-xl md:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
