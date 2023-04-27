import { TMetaResponseSingle } from "../../services/types";

export type ReturnTypesPrivateInformation = {
    setPrivateStatus: (val: boolean) => void;
    getPrivateStatus: boolean;
  };
  
export type ReturnTypesJobInformation = {
    setJobStatus: (val: boolean) => void;
    getJobStatus: boolean;
  };

export type ReturnTypesFileInformation = {
    setFileStatus: (val: boolean) => void;
    getFileStatus: boolean;
  };

export type StatusReturnTypesAdministration = {
    setAdministrationStatus: (val: string) => void;
    getAdministrationStatus: string;
  };

export type TAdministrationItem = {
  id: string;
  user_id: string;
  status: string;
  type: string;
  action_by: string;
  biodata: string;
  familial: string;
  file: string;
};


export type TAdministrationResponse = TMetaResponseSingle<TAdministrationItem>;
