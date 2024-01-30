import AboutImage from "@/components/About/BackgroundImage";
import AboutText from "@/components/About/AboutText";
import Hero from "@/components/Hero/Hero";
import HeroText from "@/components/Hero/HeroText";
import News from "@/components/News/News";
import ChooseHeroText from "@/components/ChooseHero/ChooseHeroText";

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
      <section
        className={`relative min-h-[2000px] flex flex-col bg-chooseHero bg-[length:3500px] bg-top bg-no-repeat`}
      >
        <div className="bg-gradient-to-t from-transparent via-transparent  to-black absolute top-0 left-0 right-0 w-full h-full"></div>

        <ChooseHeroText />
      </section>
    </main>
  );
}
