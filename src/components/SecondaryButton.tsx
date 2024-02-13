import React, { ReactNode } from "react";
import Link from "next/link";
import cn from "@/utils/cn";

interface SecondaryButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  isActive?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
  href = "https://store.steampowered.com/app/570/Dota_2/",
  isActive = false,
  ...props
}) => {
  return (
    <Link
      prefetch={false}
      className={cn(
        "uppercase rounded-none bg-[#313131] border-t-[2px] border-[#313131]  font-normal tracking-[0.15rem] text-xl flex items-center sm:w-48 h-14 brightness-75 text-white/60",
        className,
        { "border-[#646566] font-semibold brightness-100 text-white": isActive }
      )}
      {...props}
      href={href}
    >
      <div className="w-fit mx-auto tracking-[0.25rem] text-[16px]">
        {children}
      </div>
    </Link>
  );
};

export default SecondaryButton;
