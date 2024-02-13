import Header from "@/components/Heroes/Header";
import Organism from "@/components/Heroes/Organism";
import React from "react";

const page = () => {
  return (
    <div className="bg-heroesPage bg-cover bg-top bg-fixed min-h-[100vh] py-[77px]">
      <div className="w-[1223px] mx-auto">
        <Header />
        <Organism />
      </div>
    </div>
  );
};

export default page;
