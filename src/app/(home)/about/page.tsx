import AboutDesc from "@/components/aboutDesc";
import AboutThumbnail from "@/components/aboutThumbnail";
import Timeline from "@/components/timeline";

export default function About() {
  return (
    <section id="about" className="relative z-10 pb-14 pt-[20px] md:pt-20">
      <div className="container">
        <Timeline />
        <div className="flex flex-wrap">
          <AboutThumbnail />
          <AboutDesc />
        </div>
      </div>
    </section>
  );
}
