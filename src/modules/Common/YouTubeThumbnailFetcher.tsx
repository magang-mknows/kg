import Image from "next/image";
import { FC, ReactElement } from "react";
import { YTProps } from "./types";

const Size = {
  width: 187,
  height: 100,
};

const YouTubeThumbnailFetcher: FC<YTProps> = ({ videoId }): ReactElement => (
  <Image
    {...Size}
    className={"rounded-[8px]"}
    src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
    alt={"thumbnail"}
  />
);

export default YouTubeThumbnailFetcher;
