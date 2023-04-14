import { dataCardState } from "@/stores/MyStudy";
import { Data } from "@/stores/MyStudy/type";
import { useRecoilState } from "recoil";

type DataTypes = {
  setData: (val: Array<Data>) => void;
  getData: Array<Data>;
};

export const useDataCard = (): DataTypes => {
  const [getData, setData] = useRecoilState(dataCardState);
  return {
    setData: (val: Array<Data>) => setData(val),
    getData: getData,
  };
};
