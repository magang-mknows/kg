import SubjectService from "./service";
import { TSubjectResponse } from "./type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetAllSubject = (): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery<TSubjectResponse>({
    queryKey: ["get-all-subject"],
    queryFn: async () => await SubjectService.GetAllSubject(),
  });