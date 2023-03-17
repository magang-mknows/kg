import React, { ReactElement } from "react";
import Description from "./Description";
import ListVideo from "./ListVideo";
import YoutubeSection from "./YoutubeSection";

const ContentSection = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px10 my-[68px]">
      <div className="lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap">
        <div className="w-full">
          <YoutubeSection />
          <Description />
        </div>
        <div className="w-full">
          <ListVideo />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
