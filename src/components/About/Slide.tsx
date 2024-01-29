"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Slide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s",
      }}
    >
      <h4 className="opacity-60 text-[60px] font-bold tracking-wide">
        Join the
      </h4>
      <h3 className="text-[115px] font-bold ">battle of the ancient</h3>
    </div>
  );
};

export default Slide;
