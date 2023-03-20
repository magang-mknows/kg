import { atom, selectorFamily } from "recoil";
import { videoGuideTypes } from "./type";

export const videoGuideState = atom<Array<videoGuideTypes>>({
  key: "video-guide-state",
  default: [
    {
      videoId: "2PkWBWhHiwE",
      titleVideo: "tes",
      descVideo: "tes",
      imgVideo: "",
    },
    {
      videoId: "123",
      titleVideo: "tes",
      descVideo: "tes",
      imgVideo: "",
    },
    {
      videoId: "LKATs6MDeCw",
      titleVideo: "tes",
      descVideo: "tes",
      imgVideo: "",
    },
  ],
});

export const filterOption = selectorFamily({
  key: "filter-option-subject",
  get:
    (query: string) =>
    ({ get }) =>
      get(videoGuideState).filter((item) => item.videoId.includes(query)),
});
