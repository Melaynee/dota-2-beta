import React from "react";
import HorizontalBar from "../HorizontalBar";
import Image from "next/image";
import Link from "next/link";

const LeagueCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <Link href="/esports" onClick={onClick}>
      <div className="w-full h-[250px]  mt-10 group relative overflow-hidden cursor-pointer">
        <div className="h-[250px] flex flex-col items-center justify-around opacity-70 group-hover:opacity-100 duration-150 ">
          <Image
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dpc/headers/dpc_header_event_ti12.jpg"
            width={3800}
            height={802}
            alt="The International"
            className="object-content absolute top-0 bottom-0 -z-10 group-hover:scale-[1.1] transition-all duration-300"
          />
          <div className="flex flex-col items-center group-hover:-translate-y-2 transition-all duration-200">
            <h3 className="text-3xl">The International 2023</h3>
            <p className="tracking-widest text-sm mt-1">OCT 2023</p>
            <div className="scale-0 group-hover:scale-100 transition-all duration-300">
              <HorizontalBar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LeagueCard;
