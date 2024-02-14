import Image, { StaticImageData } from "next/image";
import React from "react";
import { getAttributeIcon } from "../../utils/attributes";
import Link from "next/link";

const HeroCard = ({
  hero,
}: {
  hero: {
    name: string;
    primary_attr: string;
    localized_name: string;
  };
}) => {
  let image =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/";
  let attr: StaticImageData | string = "";
  if (hero.name !== undefined) image += hero.name.slice(14) + ".png";
  if (hero.primary_attr !== undefined) {
    const result = getAttributeIcon(hero.primary_attr);
    if (result !== null) attr = result;
  }

  return (
    <Link
      prefetch={false}
      href={`/hero/${hero.name.slice(14)}`}
      className="flex flex-col items-center group"
    >
      <div
        className="min-w-[220px] w-[220px] h-[127px] shadow-[1px_1px_4px_1px_rgba(0,0,0,0.5)]   rounded-none group-hover:scale-[1.2] bg-center bg-cover transition-all duration-200 overflow-hidden "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex gap-2 items-center translate-y-36 group-hover:translate-y-[5.2rem] transition-all ease-in-out duration-500 relative ">
          <Image
            src={attr}
            alt={hero.primary_attr}
            width={20}
            height={20}
            className="ml-1 w-auto h-auto"
          />
          <h3 className="uppercase font-semibold tracking-wide text-xl leading-5">
            {hero.localized_name}
          </h3>
          <div className="absolute -bottom-5 left-0 right-0 h-[200px] bg-gradient-to-t from-black via-transparent via-30% to-transparent z-[-1]"></div>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
