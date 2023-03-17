import React, { ReactElement } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeSection = (): ReactElement => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <YouTube
        iframeClassName="xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-full h-[320px] "
        videoId="FPWTP0yF56c"
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default YoutubeSection;
