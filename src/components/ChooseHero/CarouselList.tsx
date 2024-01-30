"use client";
import React from "react";
import Carousel from "./Carousel";
import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = async () => {
  const { data } = await axios.get("https://api.opendota.com/api/heroes");
  return data;
};

const CarouselList = () => {
  const {
    data: heroes,
    error,
    isLoading,
  } = useQuery("heroesData", fetchHeroes);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred </div>;
  }

  return (
    <div className="relative">
      <div className="flex flex-col w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px] mx-auto">
        <Carousel direction="left" speed={50} data={heroes} />
        <Carousel direction="right" speed={40} data={heroes} />
        <Carousel direction="left" speed={60} data={heroes} />
        <Carousel direction="right" speed={20} data={heroes} />
        <Carousel direction="left" speed={40} data={heroes} />
        <div className="bg-gradient-to-r from-black via-black to-transparent absolute top-0 left-0 w-1/3 h-full z-10"></div>
        <div className="bg-gradient-to-l from-black via-black to-transparent absolute top-0 right-0 w-1/3 h-full z-10"></div>
      </div>
    </div>
  );
};

export default CarouselList;
