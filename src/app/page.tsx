import AboutImage from "@/components/Home/About/BackgroundImage";
import AboutText from "@/components/Home/About/AboutText";
import Hero from "@/components/Home/Hero/Hero";
import HeroText from "@/components/Home/Hero/HeroText";
import News from "@/components/Home/News/News";
import ChooseHeroText from "@/components/Home/ChooseHero/ChooseHeroText";
import CarouselList from "@/components/Home/ChooseHero/CarouselList";
import DPCHeroText from "@/components/Home/DPC/DPCHeroText";
import DPCImages from "@/components/Home/DPC/DPCImages";
import PlayText from "@/components/Home/Play/PlayText";

export default function Home() {
  return (
    <main className="text-white">
      <section className="mb-10 md:-mb-10 relative h-[75vh]">
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
        className={`relative min-h-[2000px] flex flex-col bg-chooseHero bg-[length:3500px] bg-top bg-no-repeat mb-[9rem]`}
      >
        <div className="bg-gradient-to-t from-transparent via-transparent to-black absolute top-0 left-0 right-0 w-full h-1/3"></div>
        <div className="flex flex-col mt-[56.25rem]">
          <ChooseHeroText />
          <CarouselList />
        </div>
      </section>
      <section className="relative flex flex-col bg-dpcHero bg-[length:2000px] bg-top bg-no-repeat mb-[9rem] ">
        <DPCImages />
        <div className="flex flex-col mt-[31.75rem]">
          <DPCHeroText />
        </div>
      </section>
      <section className="relative bg-playHero bg-cover my-10 mx-auto">
        <PlayText />
      </section>
    </main>
  );
}
