"use client";
import Link from "next/link";
import React from "react";
import { useCurrentPathName } from "../useRouterPathname";
import SelectLeagueButton from "../SelectLeagueButton";

const Options = ({ onClick }: { onClick: () => void }) => {
  const pathname = useCurrentPathName();
  return (
    <div className="bg-[#131315] w-full sticky top-20 z-20 shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] flex justify-center">
      <div className="flex -ml-28 mr-20 items-center">
        <SelectLeagueButton onClick={onClick} />
      </div>
      <div className="flex justify-between w-[350px] uppercase text-[#6B7785] font-semibold tracking-[0.2rem] text-sm pt-1">
        <Link
          href="/watch"
          className={`hover:text-white py-4 px-5 ${
            pathname === "esports"
              ? "text-white border-b-[3px] border-[#FF6046]"
              : ""
          }`}
        >
          Watch
        </Link>
        <Link
          href="/esports/schedule"
          className={`hover:text-white py-4 px-5 ${
            pathname === "schedule"
              ? "text-white border-b-[3px] border-[#FF6046]"
              : ""
          }`}
        >
          Schedule
        </Link>
        <Link
          href="/esports/standings"
          className={`hover:text-white py-4 px-5 ${
            pathname === "standings"
              ? "text-white border-b-[3px] border-[#FF6046]"
              : ""
          }`}
        >
          Standings
        </Link>
      </div>
    </div>
  );
};

export default Options;
