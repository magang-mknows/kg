import { currentQuizNumberState } from "@/stores/MyStudy";
import { useRecoilState } from "recoil";

type DataTypes = {
  setCurrNumber: (val: number) => void;
  getCurrNumber: number;
};

export const useCurrentQuizNumber = (): DataTypes => {
  const [getCurrentState, setCurrentData] = useRecoilState(currentQuizNumberState);
  return {
    setCurrNumber: (val: number) => setCurrentData(val),
    getCurrNumber: getCurrentState,
  };
};
