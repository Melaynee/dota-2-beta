import React, { ReactNode } from "react";
import steamLogo from "/public/steam_icon.svg";
import Image from "next/image";
import Link from "next/link";
import cn from "@/utils/cn";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  isIcon?: boolean;
  Hero?: boolean;
  Nav?: boolean;
  iconClassName?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  isIcon = false,
  Hero = false,
  Nav = false,
  iconClassName,
  ...props
}) => {
  return (
    <Link
      className={cn(
        "uppercase rounded-md bg-transparent border-[3px] border-white/40 font-semibold tracking-[0.15rem] text-xl flex items-center hover:border-red-500 hover:-translate-y-[2px] duration-200 w-60 h-14",
        className,
        {
          "w-[288px] h-[78px] flex justify-around border-white/70 text-left":
            Hero,
          "hidden w-[245px] h-[58px] xl:flex justify-around tracking-[0.09rem]":
            Nav,
        }
      )}
      {...props}
      href="https://store.steampowered.com/app/570940/Dota_2/"
    >
      {isIcon && (
        <Image
          src={steamLogo}
          width={30}
          className={cn("ml-5", iconClassName)}
          alt="steam logo"
        />
      )}
      <div className="w-fit mx-auto text-lg">{children}</div>
    </Link>
  );
};

export default PrimaryButton;
