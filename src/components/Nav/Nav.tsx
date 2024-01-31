import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import logoMedium from "/public/logoMedium.png";
import Link from "next/link";
import NavDropDown from "./NavDropDown";
import LanguageSelector from "./LanguageSelector";
import PrimaryButton from "../PrimaryButton";
import Burger from "./Burger";

const Nav = () => {
  return (
    <div className="pt-3 px-8 bg-transparent text-white flex justify-between items-center absolute w-full top-0 z-50">
      <div className="flex lg:gap-10">
        <Link
          href="/"
          className="brightness-75 lg:w-[50px] flex items-center xl:w-[200px] transition-opacity hover:brightness-125 cursor-pointer"
        >
          <Image
            width={200}
            height={50}
            src={logo}
            alt="logo"
            loading="lazy"
            className="hidden xl:block w-auto h-auto"
          />
          <Image
            width={50}
            height={50}
            src={logoMedium}
            alt="logo"
            loading="lazy"
            className="block md:hidden lg:block xl:hidden w-auto h-auto"
          />
        </Link>
        <div className="hidden md:flex gap-10 text-xl items-center">
          <NavDropDown className="text-xl transition-all duration-200 hover:brightness-100 font-[500]" />
          {["heroes", "news", "esports"].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="brightness-75 transition-all duration-200 delay-50 hover:brightness-125 cursor-pointer"
            >
              <span
                className={`uppercase tracking-[0.1875rem] font-[500] ${
                  index < 1 ? "-ml-4" : ""
                }`}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Burger />
        <div className="hidden md:flex flex-col text-right">
          <Link
            href="#"
            className="uppercase tracking-widest brightness-75 font-[500] text-sm hover:brightness-100"
          >
            Login
          </Link>
          <LanguageSelector className="flex gap-1 lg:gap-2 items-center text-left" />
        </div>

        <PrimaryButton isIcon Nav iconClassName="w-[12px] sm:w-[20px]">
          Play For Free
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Nav;
