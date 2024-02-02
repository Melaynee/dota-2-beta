"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const image =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg";
const image2 =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg";
const image3 =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg";

const DPCImages = () => {
  const refFirst = useRef(null);
  const refSecond = useRef(null);
  const refThird = useRef(null);
  const isInViewFirst = useInView(refFirst, { once: false });
  const isInViewSecond = useInView(refSecond, { once: false });
  const isInViewThird = useInView(refThird, { once: false });

  return (
    <div>
      <div
        ref={refFirst}
        style={{
          transform: isInViewFirst ? "none" : "translateY(200px)",
          opacity: isInViewFirst ? 1 : 0,
          transition: "all 1.5s",
        }}
        className="absolute left-0 top-0"
      >
        <Image
          src={image2}
          width={500}
          height={500}
          alt="image"
          className="w-64"
        />
      </div>
      <div
        ref={refSecond}
        style={{
          transform: isInViewSecond ? "none" : "translateY(200px)",
          opacity: isInViewSecond ? 1 : 0,
          transition: "all 1.5s",
        }}
        className="absolute left-[10%] top-[15%]"
      >
        <Image
          src={image3}
          width={500}
          height={500}
          alt="image"
          className="w-72"
        />
      </div>
      <div
        ref={refThird}
        style={{
          transform: isInViewThird ? "none" : "translateY(200px)",
          opacity: isInViewThird ? 1 : 0,
          transition: "all 1.5s",
        }}
        className="absolute right-0 bottom-[55%]"
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt="image"
          className="w-96"
        />
      </div>
    </div>
  );
};

export default DPCImages;
