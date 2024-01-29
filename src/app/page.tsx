import AboutImage from "@/components/About/AboutImage";
import AboutText from "@/components/About/AboutText";
import Hero from "@/components/Hero/Hero";
import HeroText from "@/components/Hero/HeroText";
import News from "@/components/News/News";

export default function Home() {
  return (
    <main className="text-white">
      <section className="-mb-10 relative h-[75vh]">
        <Hero />
        <div className="flex absolute left-0 top-[22%] lg:ml-[10%]">
          <HeroText />
        </div>
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black  to-transparent"></div>
      </section>
      <section className="-mb-28 relative">
        <News />
      </section>
      <section className="relative min-h-[764px] bg-cover overflow-hidden mb-[6.25rem] flex flex-col">
        <AboutImage />
        <AboutText />
      </section>
    </main>
  );
}
