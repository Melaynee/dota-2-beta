"use client";
import React, { useEffect, useState } from "react";
import useFetchPatch from "./useFetchPatch";
import { mapKeys } from "./mapKeys";
import GameplayUpdate from "./GameplayUpdate";
import GeneralUpdates from "./GeneralUpdates";
import ItemUpdates from "./ItemUpdates";
import HeroUpdates from "./HeroUpdates";

const Patch = () => {
  const { data, isError, isLoading } = useFetchPatch();
  const [patch, setPatch] = useState("7_35b");
  useEffect(() => {
    if (!isLoading) {
      setGeneral(data[patch].general);
      setHeroes(data[patch].heroes);
      setItems(data[patch].items);
    }
  }, [data, isLoading, patch]);

  const [general, setGeneral] = useState<[]>([]);
  const [heroes, setHeroes] = useState<[]>([]);
  const [items, setItems] = useState({});

  const handleChange = (event?: React.ChangeEvent<HTMLSelectElement>) => {
    if (event) setPatch(event.target.value);
  };

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="text-black text-sm font-light">
      <div className="relative">
        <GameplayUpdate>{patch.replace("_", ".")}</GameplayUpdate>
        <div className="absolute top-1/2 -translate-y-1/2 right-1/4 translate-x-1/2">
          <select
            name="patches"
            value={patch}
            id="patches"
            className="w-[100px] max-h-10"
            onChange={handleChange}
          >
            {mapKeys(data).map((patchValue) => (
              <option key={patchValue} value={patchValue}>
                {patchValue.replace("_", ".")}
              </option>
            ))}
          </select>
        </div>
      </div>

      {data[patch] && (
        <div className="text-3xl w-[900px] my-10 mx-auto text-white font-semibold">
          {general.length > 0 && <GeneralUpdates general={general} />}
          {items && <ItemUpdates items={items} />}
          {heroes && <HeroUpdates heroes={heroes} />}
        </div>
      )}
    </div>
  );
};

export default Patch;
