import React from "react";
import ButtonPlayForFree from "./ButtonPlayForFree";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="max-w-[420px] font-semibold hero-text absolute top-[16%] left-[10%] z-10 ">
        <h1 className="text-white text-[4.2rem] tracking-wider leading-none">
          “A MODERN MULTIPLAYER MASTERPIECE.”
        </h1>
        <h3 className="mt-2 text-white/70 tracking-[0.08rem] text-xl">
          {" "}
          - DESTRUCTOID
        </h3>
        <div className="mt-5 w-[80px] h-0 border-2 border-red-500 "></div>
        <div className="mt-8 w-[72%] cursor-pointer">
          <ButtonPlayForFree className="w-[30px]">
            <h3 className="tracking-widest text-2xl">Play For Free</h3>
            <p className="text-base tracking-widest text-white/70 font-thin">
              download on steam
            </p>
          </ButtonPlayForFree>
        </div>
      </div>
    </div>
  );
};

export default Hero;
