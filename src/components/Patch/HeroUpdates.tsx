import Image from "next/image";
import React from "react";
import DisplayComponent from "./DisplayComponent";

const HeroUpdates = ({ heroes }: any) => {
  let arr = [];
  console.log(heroes);

  for (const hero in heroes) {
    arr.push(hero);
  }

  return (
    <div className="my-10">
      <div className="w-full border-[#F84D04] border-l-2 bg-gradient-to-r from-[#833312FF] py-4 to-[#83331200] shadow-[0_0_30px_#000]">
        <h2 className="pl-4 text-shadow uppercase">Hero Updates</h2>
      </div>
      <div className="py-4 border-[#232C36] border-l-2 bg-gradient-to-r from-[#00000061] to-[#0625414d] shadow-[0_0_50px_#000]">
        {arr.map((hero, index) => (
          <div
            key={index}
            className="text-base pl-6 my-10 text-white font-light"
          >
            <div className="flex items-center mb-2">
              <Image
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero}.png`}
                alt={hero}
                width={128}
                height={52}
                className="mr-5 "
              />
              <h4 className="uppercase text-2xl font-semibold tracking-widest text-shadow">
                {hero.replace("_", " ")}
              </h4>
            </div>
            {heroes[hero].map((skill: string, index: number) => (
              <DisplayComponent key={index} item={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroUpdates;
