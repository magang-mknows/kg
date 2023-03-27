import { atom, selectorFamily } from "recoil";
import { videoGuideTypes } from "./type";
import VideoDummy from "@/assets/guide/video-dummy.svg";

export const videoGuideState = atom<Array<videoGuideTypes>>({
  key: "video-guide-state",
  default: [
    {
      videoId: "2PkWBWhHiwE",
      titleVideo: "Cara daftar studi",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: "",
    },
    {
      videoId: "mD_Dc4f4Cis",
      titleVideo: "Panduan kalender",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: "",
    },
    {
      videoId: "LKATs6MDeCw",
      titleVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      descVideo: "tes",
      imgVideo: "",
    },
    {
      videoId: "SMsb-ZLh_bg",
      titleVideo: "Panduan lupa password",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: VideoDummy,
    },
    {
      videoId: "oLSv6VdFkRY",
      titleVideo: "Cara melihat nilai",
      descVideo:
        "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
      imgVideo: VideoDummy,
    },
  ],
});

export const filterOption = selectorFamily({
  key: "filter-option-subject",
  get:
    (query: string) =>
    ({ get }) =>
      get(videoGuideState).filter((item) => (item.videoId as string).includes(query)),
});
