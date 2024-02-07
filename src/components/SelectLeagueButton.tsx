import React from "react";
interface SelectLeagueButtonProps {
  rest?: string[];
  onClick: () => void | SelectLeagueButtonProps;
}

const SelectLeagueButton = ({ ...rest }: SelectLeagueButtonProps) => {
  return (
    <button
      {...rest}
      className="bg-[#292F47] rounded-sm text-white/70 text-sm font-semibold tracking-wider uppercase py-1 px-3 hover:text-white hover:bg-[#373F5F] transition-all duration-200"
    >
      Select League
    </button>
  );
};

export default SelectLeagueButton;
