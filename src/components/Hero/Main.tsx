"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import React from "react";
import { useQuery } from "react-query";
import MainText from "./MainText";
import HeroStats from "./HeroStats";

const fetchHero = async () => {
  const { data } = await axios.get("https://api.opendota.com/api/heroStats");
  return data;
};

const Main = () => {
  const path = usePathname().slice(6);
  const { data, isLoading, isError, isSuccess } = useQuery("hero", fetchHero);
  const heroData = data?.filter((hero: any) => hero.name.slice(14) === path);
  return (
    isSuccess && (
      <div className="pb-10 bg-white">
        <div className="bg-heroesPage bg-cover bg-no-repeat h-[90vh] overflow-hidden relative">
          <MainText heroData={heroData} />
        </div>
        <HeroStats heroData={heroData} />
      </div>
    )
  );
};

export default Main;
