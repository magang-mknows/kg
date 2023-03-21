import { videoGuideTypes } from "@/stores/Guide/type";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeSection = (props:videoGuideTypes): ReactElement => {
  const {  videoId } = props;

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
        iframeClassName="xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-full h-[320px] disabled "
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default YoutubeSection;
