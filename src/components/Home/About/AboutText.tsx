"use client";
import React from "react";
import HorizontalBar from "../../HorizontalBar";
import PrimaryButton from "../../PrimaryButton";
import Slide from "../../Slide";

const AboutText = () => {
  return (
    <div className="text-[#E2DACE] flex flex-col items-center justify-center ">
      <div className={`uppercase text-center leading-none w-full }`}>
        <Slide>
          <h4 className="opacity-60 text-[40px] sm:text-[60px] font-bold tracking-wide">
            Join the
          </h4>
          <h3 className="text-[60px] sm:text-[80px] md:text-[115px] font-bold ">
            battle of the ancient
          </h3>
        </Slide>
      </div>
      <div className="mx-auto w-fit">
        <div className="flex flex-col items-center justify-center text-center px-5 w-full xl:w-[1000px]">
          <HorizontalBar />
          <p className="my-7 text-[16px] md:text-[23px] leading-8">
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
            multi-player action RTS game ever made and there&apos;s always a new
            strategy or tactic to discover. It&apos;s completely free to play
            and always will be – start defending your ancient now.
          </p>
          <PrimaryButton>
            <p>See what&apos;s new</p>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
