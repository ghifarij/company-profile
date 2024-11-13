import MainProduct from "@/components/mainProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getProducts } from "@/lib/product";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default async function Product() {
  const data: IProduct[] = await getProducts();

  const beansCategory = "Biji Kopi";
  const beansProducts = data.filter(
    (item) => item.fields.category === beansCategory
  );

  const equipmentsCategory = "Alat Seduh";
  const equipmentsProducts = data.filter(
    (item) => item.fields.category === equipmentsCategory
  );

  const accessoriesCategory = "Perlengkapan";
  const accessoriesProducts = data.filter(
    (item) => item.fields.category === accessoriesCategory
  );

  return (
    <section>
      <div
        id="product"
        className="text-white bg-product bg-cover pb-12 pt-[20px] md:pt-20 lg:pb-[100px]"
      >
        <div className="w-full container mb-48">
          <MainProduct />
        </div>
      </div>
      <div className="flex justify-center pt-20 mb-5">
        <h1 className="font-bold font-serif text-3xl">Biji Kopi</h1>
      </div>
      <div className="flex flex-wrap justify-center max-w-[70%] md:max-w-[1200px] mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[800px]"
        >
          <CarouselContent className="">
            {beansProducts.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 mb-7">
                  <Card>
                    <CardContent className="flex flex-wrap items-center justify-center h-[350px] p-4">
                      <Image
                        src={`https:${item.fields.thumbnail.fields.file.url}`}
                        alt={"Biji Kopi"}
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                      <div className="font-semibold line-clamp-2 w-full text-center pb-5">
                        {item.fields.title}
                      </div>
                      <div className="w-full text-center text-[#31511E] font-semibold">
                        {item.fields.price}
                      </div>
                    </CardContent>
                    <div className="mx-auto bg-[#88C273] w-40 p-2 mb-4 rounded-xl text-center text-white hover:saturate-200">
                      <Link href={"/"}>Lihat Detail Produk</Link>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center mt-12 mb-5">
        <h1 className="font-bold font-serif text-3xl">Alat Seduh</h1>
      </div>
      <div className="flex justify-center max-w-[70%] md:max-w-[1200px] mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[800px]"
        >
          <CarouselContent>
            {equipmentsProducts.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 mb-7">
                  <Card>
                    <CardContent className="flex flex-wrap items-center justify-center h-[350px] p-4">
                      <Image
                        src={`https:${item.fields.thumbnail.fields.file.url}`}
                        alt={"Biji Kopi"}
                        width={200}
                        height={200}
                      />
                      <div className="font-semibold line-clamp-2 w-full text-center pb-5">
                        {item.fields.title}
                      </div>
                      <div className="w-full text-center text-[#31511E] font-semibold">
                        {item.fields.price}
                      </div>
                    </CardContent>
                    <div className="mx-auto bg-[#88C273] w-40 p-2 mb-4 rounded-xl text-center text-white hover:saturate-200">
                      <Link href={"/"}>Lihat Detail Produk</Link>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center mt-12 mb-5">
        <h1 className="font-bold font-serif text-3xl">Perlengkapan</h1>
      </div>
      <div className="flex justify-center max-w-[70%] md:max-w-[1200px] mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[800px]"
        >
          <CarouselContent>
            {accessoriesProducts.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 mb-7">
                  <Card>
                    <CardContent className="flex flex-wrap items-center justify-center h-[350px] p-4">
                      <Image
                        src={`https:${item.fields.thumbnail.fields.file.url}`}
                        alt={"Biji Kopi"}
                        width={200}
                        height={200}
                      />
                      <div className="font-semibold line-clamp-2 w-full text-center pb-5">
                        {item.fields.title}
                      </div>
                      <div className="w-full text-center text-[#31511E] font-semibold">
                        {item.fields.price}
                      </div>
                    </CardContent>
                    <div className="mx-auto bg-[#88C273] w-40 p-2 mb-4 rounded-xl text-center text-white hover:saturate-200">
                      <Link href={"/"}>Lihat Detail Produk</Link>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
