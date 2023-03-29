import { GuideDictionaryState } from "@/stores/GuideDictionary";
import { DictionaryType } from "@/stores/GuideDictionary/type";
import { useRecoilState } from "recoil";

type GuideDictionary = {
  setGuideDictionary: (val: Array<DictionaryType>) => void;
  getGuideDictionary: Array<DictionaryType>;
};

export const useGuideVideo = (): GuideDictionary => {
  const [get, set] = useRecoilState(GuideDictionaryState);
  return {
    setGuideDictionary: (val: Array<DictionaryType>) => set(val),
    getGuideDictionary: get,
  };
};
