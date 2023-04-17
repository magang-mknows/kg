import { dataCardState } from "@/stores/MyStudy";
import { Data } from "@/stores/MyStudy/type";
import { useRecoilState } from "recoil";
import { DataTypes, TSubjectResponse } from "./type";
import SubjectService from "@/services/MyStudy/Subject";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useDataCard = (): DataTypes => {
  const [getData, setData] = useRecoilState(dataCardState);
  return {
    setData: (val: Array<Data>) => setData(val),
    getData: getData,
  };
};

// SERVICE API

export const useGetAllSubject = (): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery<TSubjectResponse>({
    queryKey: ["get-all-subject"],
    queryFn: async () => await SubjectService.GetAllSubject(),
  });
