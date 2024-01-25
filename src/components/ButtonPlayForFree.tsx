import React, { ReactNode } from "react";
import steamLogo from "/public/steam_icon.svg";
import Image from "next/image";
import Link from "next/link";

const ButtonPlayForFree = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Link
      className={
        "uppercase rounded-lg bg-transparent border-[3px] border-white/50 py-3 px-5 font-semibold tracking-[0.15rem] text-xl flex justify-around gap-2 hover:border-red-500 hover:-translate-y-[2px] duration-200"
      }
      href="https://store.steampowered.com/app/570940/Dota_2/"
    >
      <Image
        src={steamLogo}
        width={20}
        className={className}
        alt="steam logo"
      />
      <div>{children}</div>
    </Link>
  );
};

export default ButtonPlayForFree;
