import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="font-mono font-bold text-3xl">404 Not Found</div>
      <Link
        href={"/"}
        className="bg-[#31511E] text-white px-6 py-2 rounded-3xl hover:opacity-80 hover:border-4 hover:border-[#88C273]"
      >
        Kembali
      </Link>
    </div>
  );
}
