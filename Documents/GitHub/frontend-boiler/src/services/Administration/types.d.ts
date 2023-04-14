import { TMetaResponseSingle } from "../types";

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
