import Link from "next/link";
import Image from "next/image";
import NavItem from "./navItem";

export default function NavBar() {
  return (
    <header className="h-20 sticky top-0 z-50 flex w-full items-center bg-[#EDE8DC] shadow-xl transition">
      <div className="mx-auto w-full xl:container">
        <div className="relative flex items-center justify-between">
          <div className="w-52 max-w-full xl:w-60 ml-5">
            <Link href={"/"}>
              <Image width={72} height={72} src={"/logo.png"} alt={"Logo"} />
            </Link>
          </div>
          <NavItem />
        </div>
      </div>
    </header>
  );
}
