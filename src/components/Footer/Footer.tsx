import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center h-[150px]">
      <div className="w-[60%] mx-auto">
        <div className="flex justify-around max-w-[400px] mx-auto items-center">
          <Link
            prefetch={false}
            href={"https://www.valvesoftware.com/en/about"}
            className="mx-[15px] mb-[20px]"
          >
            <Image
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
              alt="valve logo"
              width={157}
              height={45}
              className=" max-h-[30px] w-full"
            />
          </Link>
          <Link
            prefetch={false}
            href="https://www.dota2.com"
            className="mx-[15px] mb-[20px]"
          >
            <Image
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
              alt="dota logo"
              width={560}
              height={114}
              className=" max-h-[30px] w-full"
            />
          </Link>
        </div>
        <p className="text-white/70 text-[13px] text-center font-thin max-w-[500px] mx-auto">
          Dota and the Dota logo are trademarks and/or registered trademarks of
          Valve Corporation. 2023 Valve Corporation, all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
