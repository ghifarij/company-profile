import HeadTeam from "@/components/headTeam";
import RandomUser from "@/components/randomUser";

export default function Team() {
  return (
    <section id="about" className="relative z-10 pb-20 pt-[20px] md:pt-20">
      <div className="container">
        <HeadTeam />
        <RandomUser />
      </div>
    </section>
  );
}
