import React from "react";
import HorizontalBar from "../HorizontalBar";
import PrimaryButton from "../PrimaryButton";

const PlayText = () => {
  return (
    <div className="text-[#E2DACE] flex flex-col py-[50px] px-[150px]">
      <div className="leading-[0.95]">
        <h4 className="opacity-60 text-[40px] sm:text-[60px] font-bold tracking-wide">
          JOIN THE
        </h4>
        <h3 className="text-[60px] sm:text-[80px] md:text-[115px] font-bold ">
          BATTLE
        </h3>
      </div>
      <div className="mb-10">
        <HorizontalBar />
      </div>
      <PrimaryButton>Play Free Now</PrimaryButton>
    </div>
  );
};

export default PlayText;
