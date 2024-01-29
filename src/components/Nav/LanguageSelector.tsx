// components/LanguageSelector.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguageSelector = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={className}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onMouseEnter={toggleLanguageSelector}
        >
          <Image
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/language.svg"
            width={10}
            height={10}
            loading="lazy"
            alt="language"
          />
          <span className="uppercase text-sm brightness-75 tracking-widest ">
            Select Language
          </span>
          <span className="text-[8px] align-center">▼</span>
        </button>
      </div>

      {isOpen && (
        <div
          onMouseLeave={toggleLanguageSelector}
          className="absolute origin-top-right border-1 border-white/75 w-56 shadow-lg bg-[#222222] ring-1 ring-white ring-opacity-80 transition-all"
        >
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {[
              "English",
              "French",
              "Spanish",
              "Portuguese",
              "German",
              "Italian",
              "Chinese",
              "Japanese",
              "Korean",
              "Ukrainian",
            ].map((item, index) => (
              <Link
                href={"/"}
                key={index}
                className="block px-3 text-[10px] font-thin mb-1 py-[1px] hover:bg-[#999999] hover:text-black hover:font-light transition ease-in duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
