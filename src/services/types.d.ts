import { DiscussionItemsTypes } from "./Discussion/types";

// export type MetaTypes = {
//   page?: number;
//   page_size?: number;
//   search?: string;
//   role_id?: number;
// };

export type MetaTypesId = {
  id: string;
};

export interface CommonResponseInterface<T> {
  meta: MetaTypes;
  items: Array<T>;
}
export interface DiscussionResponseInterface<T> {
  data: DiscussionItemsTypes;
}

export interface MetaTypes<T>{
  code?: number;
  status?: string;
  message?: string;
  data?: Array<T> ;
}

// export interface MetaTypes<T>{
//   code?: number;
//   status?: string;
//   message?: string;
//   data?:{
//     data: T;
//   }
// }

export type MetaError = {
  code: number;
  status: string;
  message: string;
}

