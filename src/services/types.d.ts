import { AxiosError, AxiosResponse } from "axios";
export interface TMetaSingle<T> {
  code?: number;
  status?: string;
  message?: string;
  data?: T;
}

export interface TMetaResponse<T> {
  code?: number;
  status?: string;
  message?: string;
  data?: Array<T>;
}

export type TMetaErrorItem = {
  code: number;
  status: string;
  message: string;
};

export type TMetaError = AxiosError<TMetaErrorItem>;

export type TMetaResponseSingle = AxiosResponse<TMetaSingle<T>>;
