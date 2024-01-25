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
      className={`relative inline-block group text-left z-[1000] ${
        isOpen ? "backdrop-filter-blur" : ""
      } `}
    >
      <div>
        <button
          type="button"
          className="text-xl tracking-widest py-2 px-6 border-[0.5px] border-transparent group-hover:bg-white/20 duration-150 group-hover:border-white rounded-se-lg rounded-ss-lg"
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
          <div
            onMouseLeave={toggleDropdown}
            className="origin-top-right absolute w-56 rounded-none shadow-lg bg-white/10 ring-1 ring-white ring-opacity-80 transition-all "
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-white  hover:ml-3 transition-all duration-300"
                role="menuitem"
              >
                PATCHES
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-white  hover:ml-3 transition-all duration-300"
                role="menuitem"
              >
                GAMEPLAY UPDATES
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-white  hover:ml-3 transition-all duration-300"
                role="menuitem"
              >
                PREVIOUS UPDATES
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
