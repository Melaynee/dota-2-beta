import React from "react";
import ButtonPlayForFree from "./ButtonPlayForFree";

const HeroText = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex absolute top-[23%] left-[10%]">
        <div className="max-w-[60%] w-fit font-semibold hero-text justify-center z-10 ">
          <h1 className="text-white text-[4.2rem] tracking-wider leading-none">
            “A MODERN MULTIPLAYER MASTERPIECE.”
          </h1>
          <h3 className="mt-2 text-white/70 tracking-[0.08rem] text-xl">
            {" "}
            - DESTRUCTOID
          </h3>
          <div className="mt-5 w-[80px] h-0 border-2 border-red-500 "></div>
          <div className="mt-8 min-w-[288px] max-w-[30%] cursor-pointer">
            <ButtonPlayForFree className="w-[30px]">
              <h3 className="tracking-widest text-2xl leading-0">
                Play For Free
              </h3>
              <p className="text-base tracking-widest text-white/70 font-thin">
                download on steam
              </p>
            </ButtonPlayForFree>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
