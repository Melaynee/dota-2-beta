import Link from "next/link";
import React from "react";

const Options = () => {
  return (
    <div className="bg-[#131315]">
      <div className="flex justify-between w-[300px] mx-auto uppercase text-[#6B7785] font-semibold tracking-[0.2rem] text-sm py-5">
        <Link href="/watch" className="hover:text-white">
          Watch
        </Link>
        <Link href="/schedule" className="hover:text-white">
          Schedule
        </Link>
        <Link href="/standings" className="hover:text-white">
          Standings
        </Link>
      </div>
    </div>
  );
};

export default Options;
