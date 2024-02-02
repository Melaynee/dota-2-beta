import React from "react";
import PrimaryButton from "../../PrimaryButton";
import HorizontalBar from "../../HorizontalBar";

const HeroText = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex lg:absolute top-[20%] left-[10%]">
        <div className="min-w-36 md:min-w-[500px] max-w-[60%] w-fit font-semibold hero-text justify-center z-10 ">
          <h1 className="text-white text-[2rem] sm:text-[4.2rem] text-shadow tracking-wider leading-[0.95]">
            “A MODERN MULTIPLAYER MASTERPIECE.”
          </h1>
          <h3 className="mt-2 text-white/70 tracking-[0.08rem] text-xl">
            - DESTRUCTOID
          </h3>
          <HorizontalBar />
          <div className="mt-8 cursor-pointer">
            <PrimaryButton isIcon Hero className="h-[72px] ">
              <h3 className="tracking-[0.1rem] text-2xl leading-none ">
                Play For Free
              </h3>
              <p className="text-base tracking-widest text-white/70 font-thin">
                download on steam
              </p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
