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
  biodata: TBiodataAdm;
  familial: TFamilyAdm;
  file: string;
};

export type TBiodataAdm = {
  gender: string;
  phone: string;
  birthdate: string;
  birthplace: string;
  address: string;
  last_education: string;
  nim: string;
  university: string;
  major: string;
  semester: string;
}

export type TFamilyAdm = {
  father_name: string
  father_occupation: string
  father_salary: string
  mother_name: string
  mother_occupation: string
  mother_salary: string
  self_salary: string
  live_with: string
  tuition_payer: string
}

export type TAdministrationResponse = TMetaResponseSingle<TAdministrationItem>;
