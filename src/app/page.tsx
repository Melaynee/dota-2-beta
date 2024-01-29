import Hero from "@/components/Hero/Hero";
import HeroText from "@/components/Hero/HeroText";
import News from "@/components/News/News";

export default function Home() {
  return (
    <main className="text-white">
      <section className="-mb-20 relative h-[75vh]">
        <Hero />
        <div className="flex absolute left-0 top-[20%] lg:ml-[10%]">
          <HeroText />
        </div>
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black via-black to-transparent"></div>
      </section>
      <section className="text-white">
        <div className="bg-black">
          <News />
        </div>
      </section>
    </main>
  );
}
