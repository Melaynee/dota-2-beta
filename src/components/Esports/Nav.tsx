import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full bg-[#222223] shadow-[0_0_10px_0_rgba(0,0,0,0.5)] sticky top-0 left-0">
      <div className="h-20 flex items-center">
        <div className="h-full w-[225px] min-w-[225px] px-5 flex items-center justify-center bg-gradient-to-l from-[#262931] to-[#171819] shadow-[0_0_10px_0_rgba(0,0,0,0.5)]">
          <Image
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//dpc/dpc_logo.png"
            width={600}
            height={200}
            className="w-[90%]"
            alt="DPC Logo"
            loading="lazy"
          />
        </div>
        <h6 className="text-white/60 text-center w-[70%] tracking-[0.075rem] text-lg font-light">
          The International 2023 has concluded
        </h6>
      </div>
    </div>
  );
};

export default Nav;
