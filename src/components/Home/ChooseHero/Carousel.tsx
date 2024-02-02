import React from "react";
import HeroCard from "./HeroCard";
import Marquee from "react-fast-marquee";

const Carousel = ({
  data,
  direction,
  speed,
}: {
  data: [
    { id: number; name: string; primary_attr: string; localized_name: string }
  ];
  direction: "left" | "right";
  speed?: number;
}) => {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      className="flex h-[140px] text-[#E2DACE]"
    >
      {data.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </Marquee>
  );
};

export default Carousel;
