"use client";
import React from "react";
import HorizontalBar from "../HorizontalBar";
import Slide from "../Slide";
import Image from "next/image";

const DPCHeroText = () => {
  return (
    <div className="text-[#E2DACE] flex flex-col items-center justify-center mb-10">
      <div className={`uppercase text-center leading-none w-full `}>
        <Image
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg"
          alt="dpc logo"
          width={100}
          height={100}
          className="mx-auto w-auto h-auto mb-5"
        />
        <Slide>
          <h4 className="opacity-60 text-[40px] sm:text-[60px] font-bold tracking-wide">
            THE
          </h4>
          <h3 className="text-[60px] sm:text-[80px] md:text-[115px] font-bold ">
            DOTA PRO CIRCUIT
          </h3>
        </Slide>
      </div>
      <div className="mx-auto w-fit">
        <div className="flex flex-col items-center justify-center text-center px-5 w-full xl:w-[1000px]">
          <HorizontalBar />
          <p className="my-7 text-[16px] sm:text-[23px] leading-8">
            When not climbing the ranks, you&apos;ll be able to learn from the
            best. The Dota Pro Circuit features ultra-high-level Dota 2
            competition streaming regularly in the game client, on Twitch and
            Steam.TV. Culminating in the largest e-sports championship in the
            world, The International, professional Dota 2 is an event not to be
            missed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DPCHeroText;
