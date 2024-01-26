import React from "react";

const Hero = () => {
  return (
    <div className="absolute top-0 left-0 z-[-2] h-full w-full">
      <video
        autoPlay
        muted
        loop
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
        className="object-cover w-full h-full"
      >
        <track
          src="captions.vtt"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </video>
      <div className="bg-gradient-to-b from-black via-transparent to-black absolute inset-0"></div>
    </div>
  );
};

export default Hero;
