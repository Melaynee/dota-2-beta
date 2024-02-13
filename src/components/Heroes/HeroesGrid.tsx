import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HeroCard from "./HeroCard";

const fetchHeroes = async () => {
  const { data } = await axios.get("https://api.opendota.com/api/heroes");
  return data;
};

const attributes = ["str", "agi", "int", "all"];

const HeroesGrid = ({ attr, hero }: { attr: number | null; hero: string }) => {
  const [heroes, setHeroes] = useState<any[]>([]);
  const {
    data: initialHeroes,
    isSuccess,
    isLoading,
    isError,
  } = useQuery("heroes", () => fetchHeroes());

  if (isSuccess && !heroes.length) {
    setHeroes(initialHeroes);
  }

  const filteredHeroes = heroes.filter((heroData) =>
    heroData.localized_name.toLowerCase().includes(hero.toLowerCase())
  );

  let sortedHeroes = [...filteredHeroes];

  if (attr !== null) {
    sortedHeroes = filteredHeroes.filter(
      (heroData) => heroData.primary_attr === attributes[attr]
    );
  }

  sortedHeroes.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    isSuccess && (
      <div className="w-[99%] mx-auto relative">
        <div className="mt-5 text-white">
          <TransitionGroup className="grid grid-cols-5 gap-4">
            {sortedHeroes.map((heroData: any) => (
              <CSSTransition key={heroData.id} timeout={300} classNames="item">
                <HeroCard hero={heroData} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    )
  );
};

export default HeroesGrid;
