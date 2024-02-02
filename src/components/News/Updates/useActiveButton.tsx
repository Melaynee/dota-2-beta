"use client";
import React from "react";
import { useCurrentPath } from "./useCurrentPath";
import { usePathname } from "next/navigation";
import SecondaryButton from "@/components/SecondaryButton";

const NEWS_PATH = "news";
const UPDATES_PATH = "updates";

const useActiveButton = () => {
  const path = useCurrentPath(usePathname()).slice(-1).toString();
  console.log(path);

  return (
    <>
      <SecondaryButton isActive={path === NEWS_PATH} href="/news">
        NEWS
      </SecondaryButton>
      <SecondaryButton isActive={path === UPDATES_PATH} href="/news/updates">
        UPDATES
      </SecondaryButton>
    </>
  );
};

export default useActiveButton;
