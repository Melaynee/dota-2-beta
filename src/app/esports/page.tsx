import React from "react";
import Hero from "@/components/Esports/Hero";
import Nav from "@/components/Esports/Nav";
import Options from "@/components/Esports/Options";

const page = () => {
  return (
    <div className="pt-[77px] text-white h-[200vh]">
      <Nav />
      <Hero />
      <Options />
    </div>
  );
};

export default page;
