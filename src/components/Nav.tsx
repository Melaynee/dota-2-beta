import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import Link from "next/link";
import NavDropDown from "./NavDropDown";
import LanguageSelector from "./LanguageSelector";
import ButtonPlayForFree from "./ButtonPlayForFree";

const Nav = () => {
  return (
    <div className="pt-3 px-8 bg-transparent text-white flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center gap-10 ">
        <Link
          href="/"
          className="brightness-90 transition-opacity hover:brightness-125 cursor-pointer"
        >
          <Image width={200} height={48} src={logo} alt="logo" loading="lazy" />
        </Link>
        <NavDropDown className="brightness-90 transition-opacity hover:brightness-100 font-[500]" />
        {["heroes", "news", "esports"].map((item, index) => (
          <Link
            key={index}
            href="/"
            className="brightness-90 transition-opacity hover:brightness-125 cursor-pointer"
          >
            <span
              className={`uppercase text-lg tracking-[0.2rem] font-[500] ${
                index < 1 ? "-ml-4" : ""
              }`}
            >
              {item}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col text-right">
          <Link
            href="#"
            className="uppercase tracking-widest brightness-75 font-[500] text-sm hover:brightness-100"
          >
            Login
          </Link>
          <LanguageSelector className="" />
        </div>
        <ButtonPlayForFree>Play For Free</ButtonPlayForFree>
      </div>
    </div>
  );
};

export default Nav;
