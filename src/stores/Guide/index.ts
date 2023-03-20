import { atom } from "recoil";
import { videoGuideTypes } from "./type";

export const videoGuide  = atom<Array<videoGuideTypes>>({
    key: "video-guide",
    default: [{
        videoId: "123",
        titleVideo: "tes",
        descVideo: "tes",
        imgVideo: ""
    }]
})