import Image from "next/image";
import React from "react";

const AboutImage = () => {
  return (
    <div className="w-full h-[30vh] bg-cover bg-no-repeat bg-bottom flex flex-col items-center mb-[200px]">
      <Image
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg"
        alt="about image"
        className="w-full opacity-60 -z-[2] hidden lg:block"
        width={4000}
        height={1680}
      />
      <Image
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg"
        alt="about image"
        className="w-full opacity-60 -z-[2] lg:hidden"
        width={4000}
        height={1680}
      />
      <div className="bg-gradient-to-t from-transparent via-transparent to-black absolute top-0 left-0 w-full h-full -z-[1]"></div>
      <div className="bg-gradient-to-b from-transparent via-transparent to-black absolute bottom-0 left-0 w-full h-full -z-[1]"></div>
    </div>
  );
};

export default AboutImage;
