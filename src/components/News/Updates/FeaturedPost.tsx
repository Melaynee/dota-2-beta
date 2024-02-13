import React from "react";
import ActiveButton from "./ActiveButton";

const FeaturedPost = () => {
  return (
    <div className="w-full bg-black h-[700px] border-b-[4px] border-[#313131] sm:pt-[77px] flex flex-col-reverse">
      <div className="w-[72%] mx-auto flex flex-col sm:flex-row gap-4">
        <ActiveButton />
      </div>

      <div className="w-[72%] mx-auto hover:-translate-y-5 transition-all duration-200 mb-16">
        <div className="flex justify-between font-semibold">
          <p className="text-xs sm:text-base text-white/70 uppercase mb-2 tracking-[0.15rem]">
            15 DECEMBER 2023
          </p>
          <span className="hidden sm:inline-block text-xs sm:text-base text-white bg-[#505050] p-1 px-2 tracking-widest uppercase">
            FEATURED POST
          </span>
        </div>
        <div className="w-[85%]">
          <h2 className="text-[36px] sm:text-[60px] sm:leading-[72px] font-semibold text-white/90 overflow-hidden">
            The Frostivus 2023 Update is Here!
          </h2>
          <p className="text-white/70 uppercase font-semibold tracking-wider mt-2 cursor-pointer group hover:text-white transition-all duration-200">
            Read More{" "}
            <span className="group-hover:translate-x-2 transition-all duration-200 inline-block">
              →
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
