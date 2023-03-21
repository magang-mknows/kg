import { dataTableState } from "@/stores/StudyPlan";
import { DataTable } from "@/stores/StudyPlan/type";
import { useRecoilState } from "recoil";

type DataTableTypes = {
  setDataTable: (val: Array<DataTable>) => void;
  getDataTable: Array<DataTable>;
};

export const useDataTable = (): DataTableTypes => {
  const [getDataTable, setDataTable] = useRecoilState(dataTableState);
  return {
    setDataTable: (val: Array<DataTable>) => setDataTable(val),
    getDataTable: getDataTable,
  };
};
