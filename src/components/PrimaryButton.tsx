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
        "uppercase rounded-lg bg-transparent border-[3px] border-white/70 font-semibold tracking-[0.15rem] text-xl flex items-center hover:border-red-500 hover:-translate-y-[2px] duration-200 w-full",
        className,
        {
          "w-[288px] h-[78px] flex justify-around text-left": Hero,
          "w-[255px] h-[58px] flex justify-around": Nav,
        }
      )}
      {...props}
      href="https://store.steampowered.com/app/570940/Dota_2/"
    >
      {isIcon && (
        <Image
          src={steamLogo}
          width={30}
          className={cn("", iconClassName)}
          alt="steam logo"
        />
      )}
      <div>{children}</div>
    </Link>
  );
};

export default PrimaryButton;
