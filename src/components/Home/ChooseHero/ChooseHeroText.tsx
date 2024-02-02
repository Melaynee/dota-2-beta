"use client";
import React from "react";
import HorizontalBar from "../../HorizontalBar";
import PrimaryButton from "../../PrimaryButton";
import Slide from "../../Slide";

const ChooseHeroText = () => {
  return (
    <div className="text-[#E2DACE] flex flex-col items-center justify-center mb-10">
      <div className={`uppercase text-center leading-none w-full `}>
        <Slide>
          <h4 className="opacity-60 text-[40px] sm:text-[60px] font-bold tracking-wide">
            WHO WILL YOU
          </h4>
          <h3 className="text-[60px] sm:text-[80px] md:text-[115px] font-bold ">
            CHOOSE?
          </h3>
        </Slide>
      </div>
      <div className="mx-auto w-fit">
        <div className="flex flex-col items-center justify-center text-center px-5 w-full xl:w-[1000px]">
          <HorizontalBar />
          <p className="my-7 text-[16px] sm:text-[23px] leading-8">
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2&apos;s hero pool is massive and limitlessly diverse. Unleash
            incredible abilities and devastating ultimates on your way to
            victory.
          </p>
          <PrimaryButton>
            <p>View all heroes</p>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ChooseHeroText;
