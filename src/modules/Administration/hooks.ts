import { useRecoilState } from "recoil";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import AdministrationService from "./service";
import { PrivateInformationState, JobInformationState, FileInformationState, AdministrationStatusState } from "./store";
import { ReturnTypesPrivateInformation, ReturnTypesJobInformation, ReturnTypesFileInformation, StatusReturnTypesAdministration, TAdministrationResponse, TBiodataAdm, TFamilyAdm } from "./type";
import { TMetaError } from "@/services/types";

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

export const useUpdateBiodataAdm = (): UseMutationResult<
  TAdministrationResponse,
  TMetaError,
  TBiodataAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-biodata-adm"],
    mutationFn: async (data) => await AdministrationService.UpdateBiodataAdm(data),
  });
}

export const useUpdateFamilyAdm = (): UseMutationResult<
  TAdministrationResponse,
  TMetaError,
  TFamilyAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-family-adm"],
    mutationFn: async (data) => await AdministrationService.UpdateFamilyAdm(data),
  });
};

