import React, { Suspense } from "react";
import Section from "@/components/Esports/Section";

const page = () => {
  return (
    <div className="pt-[77px] text-white">
      <Suspense>
        <Section />
      </Suspense>
    </div>
  );
};

export default page;
