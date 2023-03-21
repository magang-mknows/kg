import React, { ReactElement } from "react";
import Card from "@/components/Common/Card";
import PlayButton from "@/assets/guide/play-button.svg";
import Image from "next/image";
import { useGuideVideo } from "@/hooks/Guide/useVideoGuide";
import Link from "next/link";

const ContentSection = (): ReactElement => {
  const { getGuideVideo } = useGuideVideo();
  return (
    <div className="w-full px-6 md:px-8 lg:px-10">
      <div className="mt-[24px] mb-[54px] justify-between grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 md:gap-x-8 md:gap-y-5 gap-y-5">
        {getGuideVideo.slice(0, 6).map((item, i) => {
          return (
            <Link href={`/panduan/video-panduan/${item.videoId}`} key={i}>
              <Card
                className="relative w-full min-h-min border rounded-lg px-3 shadow-md"
                src={`https://i.ytimg.com/vi/${item.videoId}/hq720.jpg`}
                imgwidth={380}
                imgheight={170}
                imgStyle="w-full rounded-[8px]"
                hasImage={true}
                titleStyle={"text-xl font-bold mt-2"}
                title={item.titleVideo}
                icon={
                  <div className="absolute bottom-[60%] left-[45%]">
                    <Image src={PlayButton} alt="play button" />
                  </div>
                }
              >
                <p className="w-full text-sm font-base mt-3.5" style={{ color: "#000000" }}>
                  {item.descVideo?.substring(0, 80)}...
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentSection;
