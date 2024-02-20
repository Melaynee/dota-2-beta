import React, { useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";
import LeagueCard from "./LeagueCard";

const LeagueModal = ({
  showModal,
  onClick,
}: {
  showModal: boolean;
  onClick: () => void;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showModal]);
  return (
    showModal && (
      <RemoveScroll className="w-full h-full">
        <div
          className="w-full h-full absolute left-0 top-0 z-[60] bg-black/80"
          onClick={onClick}
        ></div>
        <div className="w-[82%] h-[700px] translate-x-[-50%] top-[3%] left-[50%] bg-gradient-to-b from-[#2C3237] to-[#05060A] absolute z-[61] border-t-[3px] border-[#ff6046]">
          <div
            className="absolute right-2 top-4 py-1 px-5 bg-[#5C656D] text-white opacity-50 hover:opacity-100 cursor-pointer rounded-sm text-xl font-bold"
            onClick={onClick}
          >
            X
          </div>
          <h3 className="mt-12 text-center text-[32px] text-shadow tracking-wide font-semibold uppercase">
            select league
          </h3>
          <div className="w-[95%] mx-auto">
            <LeagueCard onClick={onClick} />
          </div>
        </div>
      </RemoveScroll>
    )
  );
};

export default LeagueModal;
