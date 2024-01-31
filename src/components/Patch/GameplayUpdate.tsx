import React from "react";

const GameplayUpdate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 w-full bg-black h-[180px] text-[#ED3B1C]">
      <div className="w-[900px] mx-auto py-10">
        <h6 className="text-[1.8rem] font-[400] tracking-widest mb-9">
          Gameplay Update
        </h6>
        <h4 className="text-[4rem] font-semibold tracking-widest">
          {children}
        </h4>
      </div>
    </div>
  );
};

export default GameplayUpdate;
