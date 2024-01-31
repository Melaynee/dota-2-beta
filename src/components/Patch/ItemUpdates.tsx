import Image from "next/image";
import React from "react";
import DisplayComponent from "./DisplayComponent";

const ItemUpdates = ({ items }: any) => {
  let arr = [];

  for (const item in items) {
    arr.push(item);
  }

  return (
    <div className="my-10">
      <div className="w-full border-[#F84D04] border-l-2 bg-gradient-to-r from-[#833312FF] py-4 to-[#83331200] shadow-[0_0_30px_#000]">
        <h2 className="pl-4 text-shadow uppercase">Item Updates</h2>
      </div>
      <div className="py-4 border-[#232C36] border-l-2 bg-gradient-to-r from-[#00000061] to-[#0625414d] shadow-[0_0_50px_#000]">
        {arr.map((item, index) => (
          <div
            key={index}
            className="text-base pl-14 my-10 text-white font-light"
          >
            <div className="flex items-center">
              <Image
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/${item}.png`}
                alt={item}
                width={56}
                height={42}
                className="mr-4 mb-3"
              />
              <h4 className="uppercase text-2xl font-semibold tracking-widest text-shadow">
                {item.replace("_", " ")}
              </h4>
            </div>
            {items[item].map((item: string, index: number) => (
              <DisplayComponent key={index} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemUpdates;
