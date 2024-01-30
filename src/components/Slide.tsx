"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Slide = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </div>
  );
};

export default Slide;
