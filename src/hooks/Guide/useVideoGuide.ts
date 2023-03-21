import { videoGuideState } from "@/stores/Guide";
import { videoGuideTypes } from "@/stores/Guide/type";
import { useRecoilState } from "recoil";

type GuideVideo = {
  setGuideVideo: (val: Array<videoGuideTypes>) => void;
  getGuideVideo: Array<videoGuideTypes>;
};

export const useGuideVideo = (): GuideVideo => {
  const [get, set] = useRecoilState(videoGuideState);
  return {
    setGuideVideo: (val: Array<videoGuideTypes>) => set(val),
    getGuideVideo: get,
  };
};
