import { filterOption } from "../GuideVideo/store";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import Description from "./Description";
import ListVideo from "./ListVideo";
import YoutubeSection from "./YoutubeSection";

const ContentSection = (): ReactElement => {
  const { query } = useRouter();
  const getOption = useRecoilValue(filterOption(query.videoId as unknown as string));

  return (
    <div className="w-full px-6 md:px-8 lg:px-10 my-[68px]">
      {getOption.map((item, index) => {
        return (
          <div key={index} className="lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap">
            <div className="w-full">
              <YoutubeSection videoId={item.videoId} />
              <Description titleVideo={item.titleVideo} descVideo={item.descVideo} />
            </div>
            <div className="w-full">
              <ListVideo />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
