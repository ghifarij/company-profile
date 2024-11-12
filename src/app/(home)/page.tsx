import Hero from "@/components/hero";
import AboutDesc from "@/components/aboutDesc";
import AboutThumbnail from "@/components/aboutThumbnail";
import MainProduct from "@/components/mainProduct";
import Link from "next/link";
import TestimonialsComp from "@/components/testimonialsComp";
import HeadTeam from "@/components/headTeam";

export default function Home() {
  return (
    <div id="home" className="relative">
      <Hero />
      <section id="about" className="relative z-10 pb-14 pt-[20px] lg:pt-24">
        <div className="container">
          <div className="flex flex-wrap">
            <AboutThumbnail />
            <AboutDesc />
          </div>
        </div>
      </section>
      <section id="about" className="relative z-10 pb-20 pt-[20px]">
        <div className="container">
          <HeadTeam />
        </div>
      </section>
      <section
        id="product"
        className="text-white bg-product bg-cover pb-12 pt-20 lg:pb-[100px]"
      >
        <div className="w-full container">
          <MainProduct />
        </div>
        <div className="text-center mt-52">
          <Link
            href={"/product"}
            className="px-6 py-3 bg-yellow-700 hover:bg-yellow-800 text-white font-bold rounded-lg transition duration-300"
          >
            TELUSURI PRODUK
          </Link>
        </div>
      </section>
      <section id="testimonials" className="pb-20">
        <div className="container">
          <TestimonialsComp />
        </div>
      </section>
    </div>
  );
}
