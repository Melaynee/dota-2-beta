import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="relative h-[400px] flex justify-around items-center px-20">
        <Image
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dpc/headers/dpc_header_event_ti12.jpg"
          alt="The International"
          width={3880}
          height={802}
          className="h-[400px] w-full absolute -z-[10]"
        />
        <div className="flex flex-col items-center text-center">
          <div className="mb-5">
            <h6 className="tracking-[0.15rem] text-sm">GROUP STAGE</h6>
            <h3 className="text-2xl font-semibold text-[#E7DDCD] tracking-widest bg-gradient-to-b from-[#EBE2D5] to-[#BFAD8F] text-transparent bg-clip-text">
              OCT 12 - 16
            </h3>
            <p className="text-xs">Online</p>
          </div>
          <div className="mb-5">
            <h6 className="tracking-[0.15rem] text-sm">PLAYOFFS</h6>
            <h3 className="text-2xl font-semibold text-[#E7DDCD] tracking-widest bg-gradient-to-b from-[#EBE2D5] to-[#BFAD8F] text-transparent bg-clip-text">
              OCT 20 - 23
            </h3>
            <p className="text-xs">Seattle Convention Center</p>
          </div>
          <div className="mb-5">
            <h6 className="tracking-[0.15rem] text-sm">FINALS</h6>
            <h3 className="text-2xl font-semibold text-[#E7DDCD] tracking-widest bg-gradient-to-b from-[#EBE2D5] to-[#BFAD8F] text-transparent bg-clip-text">
              OCT 27 - 30
            </h3>
            <p className="text-xs">Climate Pledge Arena</p>
          </div>
        </div>
        <div className="w-[460px]">
          <Image
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/ti_logo_full_color.png"
            alt="The International logo"
            width={866}
            height={574}
            className="w-auto"
          />
          <h4 className="mt-5 text-white text-base font-semibold text-shadow text-center tracking-[0.2rem]">
            2022-2023 SEASON
          </h4>
        </div>
        <div>
          <h4 className="text-base tracking-[0.2rem] font-semibold">
            TOTAL PRIZE POOL
          </h4>
          <h2 className="text-[48px] font-bold bg-gradient-to-b from-[#32c9e4] via-15%[#2CB5CD] to-[#1C779E] text-transparent bg-clip-text ">
            $3 380 455
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
