"use client";
import React, { useState } from "react";
import FilterBar from "./FilterBar";
import HeroesGrid from "./HeroesGrid";

const Organism = () => {
  const [attr, setAttr] = useState<number | null>(null);
  const [hero, setHero] = useState<string>("");
  return (
    <>
      <FilterBar setAttr={setAttr} attr={attr} hero={hero} setHero={setHero} />
      <HeroesGrid attr={attr} hero={hero} />
    </>
  );
};

export default Organism;
