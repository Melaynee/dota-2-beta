"use client";
import React, { useState } from "react";
import LeagueModal from "./LeagueModal";
import Nav from "./Nav";
import Hero from "./Hero";
import Options from "./Options";
import ParseError from "./ParseError";

const Section = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <LeagueModal
        showModal={showModal}
        onClick={() => {
          setShowModal(!showModal);
        }}
      />
      <Nav />
      <Hero />
      <Options onClick={() => setShowModal(!showModal)} />
      <ParseError />
    </div>
  );
};

export default Section;
