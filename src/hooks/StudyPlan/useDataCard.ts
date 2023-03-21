import { dataStudyCardState } from "@/stores/StudyPlan";
import { DataCard } from "@/stores/StudyPlan/type";
import { useRecoilState } from "recoil";

type DataCardTypes = {
  setDataCard: (val: Array<DataCard>) => void;
  getDataCard: Array<DataCard>;
};

export const useDataCard = (): DataCardTypes => {
  const [getDataCard, setDataCard] = useRecoilState(dataStudyCardState);
  return {
    setDataCard: (val: Array<DataCard>) => setDataCard(val),
    getDataCard: getDataCard,
  };
};
