import { optionSubjectState } from "@/stores/StudyPlan";
import { OptionSubject } from "@/stores/StudyPlan/type";
import { useRecoilState } from "recoil";

type OptionSubjectTypes = {
  setOptionSubject: (val: Array<OptionSubject>) => void;
  getOptionSubject: Array<OptionSubject>;
};

export const useHistorySimulation = (): OptionSubjectTypes => {
  const [getOption, setOption] = useRecoilState(optionSubjectState);
  return {
    setOptionSubject: (val: Array<OptionSubject>) => setOption(val),
    getOptionSubject: getOption,
  };
};
