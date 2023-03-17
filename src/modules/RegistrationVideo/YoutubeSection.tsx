import React, { ReactElement } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeSection = (): ReactElement => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "398",
    width: "728",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <YouTube videoId="FPWTP0yF56c" opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default YoutubeSection;
