import Link from "next/link";
import Image from "next/image";
import NavItem from "./navItem";

export default function NavBar() {
  return (
    <header className="h-20 sticky top-0 z-50 flex w-full items-center bg-[#EDE8DC] shadow-xl transition">
      <div className="mx-auto w-full xl:container">
        <div className="relative flex items-center justify-between">
          <div className="ml-5">
            <Link href={"/"}>
              <Image width={80} height={80} src={"/logo.png"} alt={"Logo"} />
            </Link>
          </div>
          <NavItem />
        </div>
      </div>
    </header>
  );
}
