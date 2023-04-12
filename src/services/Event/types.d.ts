import { TMetaResponse } from "../types";

export type TEventPayload = {
  nama: string;
  kelas: string;
  nim?: string;
};

export type TEventResponse = TMetaResponse<TEventPayload>;
