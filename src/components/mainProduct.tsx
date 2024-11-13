import Image from "next/image";

export default function MainProduct() {
  return (
    <div className="mb-10 flex flex-col flex-warp items-center lg:mb-[60px]">
      <span className="block font-serif text-4xl font-bold opacity-90">
        Produk Unggulan
      </span>
      <div className="flex flex-wrap mt-10">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="card w-64 mx-auto md:mb-0 mb-52">
            <div className="card__content text-center relative p-20 transition-transform duration-1000">
              <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 h-80 overflow-hidden rounded-lg flex items-center justify-center">
                <Image
                  src={"/biji-kopi.jpg"}
                  alt={"Biji kopi"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 h-80 bg-[#EDE8DC] opacity-90 text-black rounded-lg content-center">
                <h3 className="pb-3 text-3xl font-bold font-serif">
                  Biji Kopi
                </h3>
                <p className="font-medium text-lg">
                  Tersedia biji kopi dari berbagai macam daerah.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="card w-64 mx-auto md:mb-0 mb-52">
            <div className="card__content text-center relative p-20 transition-transform duration-1000">
              <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 h-80 overflow-hidden rounded-lg flex items-center justify-center">
                <Image
                  src={"/alat-seduh.jpg"}
                  alt={"Alat seduh"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 h-80 bg-[#EDE8DC] opacity-90 text-black rounded-lg content-center">
                <h3 className="pb-3 text-3xl font-bold font-serif">
                  Alat Seduh
                </h3>
                <p className="font-medium text-lg">
                  Beragam alat seduh untuk menghasilkan rasa yang berbeda.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="card w-64 mx-auto">
            <div className="card__content text-center relative p-20 transition-transform duration-1000">
              <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 h-80 overflow-hidden rounded-lg flex items-center justify-center">
                <Image
                  src={"/tumbler-kopi.jpg"}
                  alt={"Tumbler Kopi"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 h-80 bg-[#EDE8DC] opacity-90 text-black rounded-lg content-center">
                <h3 className="pb-3 text-3xl font-bold font-serif">
                  Perlengkapan Kopi
                </h3>
                <p className="font-medium text-lg">
                  Untuk para pecinta kopi yang menginginkan lebih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
