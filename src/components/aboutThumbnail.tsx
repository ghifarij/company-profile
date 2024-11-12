import Image from "next/image";

export default function AboutThumbnail() {
  return (
    <div className="w-full md:w-2/5 px-4">
      <div className="flex relative w-52 h-52 md:w-96 md:h-96 overflow-hidden mx-auto rounded-xl">
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
