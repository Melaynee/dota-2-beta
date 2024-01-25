import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-fit -z-[10]">
      <video
        autoPlay
        muted
        loop
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
        className="object-cover"
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

export default BackgroundVideo;
