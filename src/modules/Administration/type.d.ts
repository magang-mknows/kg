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
  