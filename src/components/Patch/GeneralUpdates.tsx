import React from "react";
import DisplayComponent from "./DisplayComponent";

const GeneralUpdates = ({ general }: { general: string[] }) => {
  return (
    <div className="my-10">
      <div className="w-full border-[#F84D04] border-l-2 bg-gradient-to-r from-[#833312FF] py-4 to-[#83331200] shadow-[0_0_30px_#000]">
        <h2 className="pl-4 text-shadow uppercase">General Updates</h2>
      </div>
      <div className="py-4 border-[#232C36] border-l-2 bg-gradient-to-r from-[#00000061] to-[#0625414d] shadow-[0_0_50px_#000]">
        <ul className="text-base list-disc pl-14 text-white/70 font-light">
          {general.map((item, index) => (
            <DisplayComponent key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneralUpdates;
