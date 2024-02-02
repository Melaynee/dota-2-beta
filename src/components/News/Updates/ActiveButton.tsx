"use client";
import React from "react";
import useActiveButton from "./useActiveButton";

const ActiveButton = () => {
  const activeButtons = useActiveButton();
  return <>{activeButtons}</>;
};

export default ActiveButton;
