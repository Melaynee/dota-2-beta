import { getAttributeIcon } from "@/utils/attributes";
import Image from "next/image";
import React from "react";

const primaryAttrLabel = (hero: any) => {
  let primaryAttrLabelValue;
  if (hero.primary_attr === "agi") {
    primaryAttrLabelValue = "Agility";
  } else if (hero.primary_attr === "str") {
    primaryAttrLabelValue = "Strength";
  } else if (hero.primary_attr === "int") {
    primaryAttrLabelValue = "Intelligence";
  } else {
    primaryAttrLabelValue = "Universal";
  }
  return primaryAttrLabelValue;
};

const complexityLabel = (hero: any) => {
  let complexityLabelValue;
  let winrate = (hero.pro_win * 100) / hero.pro_pick;
  if (winrate > 52) {
    complexityLabelValue = 1;
  } else if (winrate < 48) {
    complexityLabelValue = 3;
  } else complexityLabelValue = 2;

  return complexityLabelValue;
};

const MainText = ({ heroData }: { heroData: any }) => {
  return (
    <div className="text-white w-[90%] mx-auto">
      {heroData.map((hero: any) => (
        <div key={hero.id} className="flex h-[70vh]">
          <div className="flex flex-col justify-between h-1/2 my-auto translate-x-20">
            <div className="-rotate-90 -translate-x-[30rem] gap-5 items-center flex absolute bottom-[75%] w-[800px]">
              <Image
                src={getAttributeIcon(hero.primary_attr) ?? ""}
                alt={hero.primary_attr}
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <p className="uppercase font-semibold text-xl">
                {hero.localized_name}
              </p>
              <p className="text-white/60 font-light tracking-widest">
                {hero.id}
              </p>
              <div className="border-[1px] border-white/40 w-screen"></div>
            </div>
            <div>
              <p className="flex mb-1 gap-2 items-center uppercase tracking-wider text-[22px]">
                <Image
                  src={getAttributeIcon(hero.primary_attr) ?? ""}
                  alt={hero.primary_attr}
                  width={32}
                  height={32}
                />
                {primaryAttrLabel(hero)}
              </p>
              <p className="text-[72px] uppercase tracking-wide font-semibold -mt-5 -mb-7">
                {hero.localized_name}
              </p>
              <div className=" font-semibold m-2 w-[400px]">
                <p className="uppercase  text-[18px] text-[#95C9DB]">
                  THERE COULD BE A DESCRIPTION OF HERO
                </p>
                <p className="text-white tracking-wide font-medium mt-3 text-[20px]">
                  If {hero.localized_name} were a dessert, it might be a rich
                  chocolate cake filled with creamy vanilla custard, coated in
                  chocolate ganache and adorned with edible gold.
                </p>
                <button
                  onClick={() => alert("Yummy")}
                  className="mt-1 mb-5 underline text-[16px] font-light text-white/40"
                >
                  Wow! Yummy
                </button>
              </div>
            </div>
            <div>
              <p className="text-white/60 tracking-widest uppercase">
                Attack type
              </p>
              <p className="my-2 flex gap-2 items-center uppercase tracking-widest text-[14px]">
                <Image
                  src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/${hero.attack_type.toLowerCase()}.svg`}
                  alt={hero.attack_type}
                  width={26}
                  height={26}
                />
                {hero.attack_type}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-white/60 tracking-widest uppercase">
                Complexity
              </p>
              <div className="my-2 flex gap-5 items-center">
                <div
                  className={`w-4 h-4 rotate-45 border-white border-[1px] ${
                    complexityLabel(hero) >= 1 ? "bg-white" : ""
                  }`}
                ></div>
                <div
                  className={`w-4 h-4 rotate-45 border-white border-[1px] ${
                    complexityLabel(hero) >= 2 ? "bg-white" : ""
                  }`}
                ></div>
                <div
                  className={`w-4 h-4 rotate-45 border-white border-[1px] ${
                    complexityLabel(hero) == 3 ? "bg-white" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="scale-125 translate-y-16 relative">
            <div className="w-screen h-[400px] bg-black/40 -rotate-45 absolute top-[10%] -z-[1]"></div>
            <video
              autoPlay
              loop
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${hero.name.slice(
                14
              )}.webm`}
            />
          </div>
          <div
            className="absolute w-full h-[200px] bg-gradient-to-t from-black to-transparent bottom-0 left-0
            "
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MainText;
