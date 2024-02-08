import React from "react";
import agi from "/public/images/icons/agi.png";
import str from "/public/images/icons/str.png";
import int from "/public/images/icons/int.png";
import all from "/public/images/icons/all.png";
import Image from "next/image";

const attributes = [str, agi, int, all];

const FilterBar = () => {
  return (
    <div className="text-white mt-9 w-[98%] mx-auto">
      <div className="flex justify-between bg-gradient-to-r from-black/60 to-black/20 rounded p-2 shadow-[0_0_5px_#000] items-center">
        <div className="ml-5">
          <h3 className="text-lg">FILTER HEROES</h3>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-light text-[#79889E] tracking-widest mr-4">
            ATTRIBUTE
          </p>
          {attributes.map((attribute, index) => (
            <button
              key={index}
              className="w-[34px] h-[34px] bg-[#808080] skew-x-[20deg]"
            >
              <Image
                src={attribute}
                width={26}
                height={26}
                alt="attribute"
                className="brightness-0 mx-auto -skew-x-[20deg]"
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="font-light text-[#79889E] tracking-widest">
            COMPLEXITY
          </p>
          <div className="flex gap-1 items-center">
            <button className="w-[34px] h-[34px] bg-[#808080] skew-x-[15deg] text-3xl">
              <p className="-skew-x-[15deg] text-black/60 -mt-1">♦</p>
            </button>
            <button className="w-[34px] h-[34px] bg-[#808080] skew-x-[15deg] text-3xl">
              <p className="-skew-x-[15deg] mx-auto text-black/60 -mt-1">♦</p>
            </button>
          </div>
        </div>
        <div>
          <input type="text" className="bg-black/40 h-[50px] w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
