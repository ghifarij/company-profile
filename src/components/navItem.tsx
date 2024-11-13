"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMenu } from "react-icons/io5";

export default function NavItem() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      {!isDesktop ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="mr-7">
            <IoMenu className="text-4xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-5">
            <Link href={"/"}>
              <DropdownMenuLabel className="text-[#6F4E37] font-bold hover:underline">
                Beranda
              </DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />
            <Link href={"/about"}>
              <DropdownMenuItem className="text-[#6F4E37] font-bold hover:underline">
                Tentang Kami
              </DropdownMenuItem>
            </Link>
            <Link href={"/product"}>
              <DropdownMenuItem className="text-[#6F4E37] font-bold hover:underline">
                Produk
              </DropdownMenuItem>
            </Link>
            <Link href={"/team"}>
              <DropdownMenuItem className="text-[#6F4E37] font-bold hover:underline">
                Tim
              </DropdownMenuItem>
            </Link>
            <Link href={"/subscribe"}>
              <DropdownMenuItem className="text-[#6F4E37] font-bold hover:underline">
                Berlangganan
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex gap-10">
            <Link href={"/"}>
              <div className="text-[#6F4E37] font-bold hover:underline">
                Beranda
              </div>
            </Link>
            <Link href={"/about"}>
              <div className="text-[#6F4E37] font-bold hover:underline">
                Tentang Kami
              </div>
            </Link>
            <Link href={"/product"}>
              <div className="text-[#6F4E37] font-bold hover:underline">
                Produk
              </div>
            </Link>
            <Link href={"/team"}>
              <div className="text-[#6F4E37] font-bold hover:underline">
                Tim
              </div>
            </Link>
          </div>
          <Link href={"/subscribe"} className="ml-12">
            <button className="bg-[#6F4E37] text-white font-mono font-semibold py-2 px-3 rounded-3xl hover:saturate-150 hover:shadow-xl">
              Berlangganan
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
