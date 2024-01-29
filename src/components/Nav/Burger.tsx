import React from "react";

const Burger = () => {
  return (
    <button className="md:hidden w-[50px] h-[50px] opacity-75 hover:opacity-100 duration-150 delay-100 flex flex-col justify-around py-[10px] pl-[10px]">
      <div className="w-full h-[5px] rounded-[2px] bg-white mb-1"></div>
      <div className="w-full h-[5px] rounded-[2px] bg-white mb-1"></div>
      <div className="w-full h-[5px] rounded-[2px] bg-white mb-1"></div>
    </button>
  );
};

export default Burger;
