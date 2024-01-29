// components/Dropdown.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";

interface DropdownProps {
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative inline-block group text-left z-[1000] `}
      onMouseLeave={toggleDropdown}
    >
      <div>
        <button
          type="button"
          className="text-xl tracking-widest py-3 px-5 min-w-[60px] w-full border-[0.5px] border-transparent group-hover:bg-white/20 duration-150 group-hover:border-white rounded-se-lg rounded-ss-lg brightness-75 hover:brightness-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onMouseEnter={toggleDropdown}
        >
          <span className={className}>GAME </span>
          <span className="text-[8px] align-top ">▼</span>
        </button>
      </div>

      {isOpen && (
        <div>
          <div className="origin-top-right absolute w-56 rounded-none shadow-lg bg-white/10 ring-1 ring-white ring-opacity-80 transition-all delay-200 ">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {["PATCHES", "GAMEPLAY UPDATES", "PREVIOUS UPDATES"].map(
                (name) => {
                  return (
                    <Link
                      href={`/${name}`}
                      key={name}
                      className="block px-4 py-2 text-sm text-white  hover:ml-3 transition-all duration-300"
                      role="menuitem"
                    >
                      {name}
                    </Link>
                  );
                }
              )}
              <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-[6px]  w-full h-full z-[-1]"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
