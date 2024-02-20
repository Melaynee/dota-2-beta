"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import SelectLeagueButton from "../SelectLeagueButton";
import { useSearchParams } from "next/navigation";

const Options = ({ onClick }: { onClick: () => void }) => {
  const params = new URLSearchParams(useSearchParams());

  const active = params.get("tab") ?? "esports";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-[#131315] w-full sticky top-20 z-20 shadow-[0_10px_20px_0_rgba(0,0,0,0.5)] flex justify-center">
        <div className="flex -ml-28 mr-20 items-center">
          <SelectLeagueButton onClick={onClick} />
        </div>
        <div className="flex justify-between w-[350px] uppercase text-[#6B7785] font-semibold tracking-[0.2rem] text-sm pt-1">
          <Link
            scroll={false}
            href="/esports"
            className={`hover:text-white py-4 px-5 ${
              active === "esports"
                ? "text-white border-b-[3px] border-[#FF6046]"
                : ""
            }`}
          >
            Watch
          </Link>
          <Link
            scroll={false}
            href={{ query: { tab: "schedule" } }}
            className={`hover:text-white py-4 px-5 ${
              active === "schedule"
                ? "text-white border-b-[3px] border-[#FF6046]"
                : ""
            }`}
          >
            Schedule
          </Link>
          <Link
            scroll={false}
            href={{ query: { tab: "standings" } }}
            className={`hover:text-white py-4 px-5 ${
              active === "standings"
                ? "text-white border-b-[3px] border-[#FF6046]"
                : ""
            }`}
          >
            Standings
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default Options;
