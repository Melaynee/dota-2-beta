import FilterBar from "@/components/Heroes/FilterBar";
import Header from "@/components/Heroes/Header";
import React from "react";

const page = () => {
  return (
    <div className="bg-heroesPage h-[100vh] pt-[77px]">
      <div className="w-[1223px] mx-auto">
        <Header />
        <FilterBar />
      </div>
    </div>
  );
};

export default page;
