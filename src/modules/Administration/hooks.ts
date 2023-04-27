import { useRecoilState } from "recoil";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import AdministrationService from "./service";
import { PrivateInformationState, JobInformationState, FileInformationState, AdministrationStatusState } from "./store";
import { ReturnTypesPrivateInformation, ReturnTypesJobInformation, ReturnTypesFileInformation, StatusReturnTypesAdministration, TAdministrationResponse } from "./type";

export const usePrivateInformationStatus = (): ReturnTypesPrivateInformation => {
  const [get, set] = useRecoilState(PrivateInformationState);
  return {
    setPrivateStatus: (val: boolean) => set(val),
    getPrivateStatus: get,
  };
};

export const useJobInformationStatus = (): ReturnTypesJobInformation => {
  const [get, set] = useRecoilState(JobInformationState);
  return {
    setJobStatus: (val: boolean) => set(val),
    getJobStatus: get,
  };
};

export const useFileInformationStatus = (): ReturnTypesFileInformation => {
  const [getStatus, setStatus] = useRecoilState(FileInformationState);
  return {
    setFileStatus: (val: boolean) => setStatus(val),
    getFileStatus: getStatus,
  };
};

export const useAdministrationStatus = (): StatusReturnTypesAdministration => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};

export const useFetchAllAdministration = (): UseQueryResult<TAdministrationResponse, unknown> =>
  useQuery<TAdministrationResponse>({
    queryKey: ["administration-get-all"],
    queryFn: async () => await AdministrationService.GetAdministration(),
  });

