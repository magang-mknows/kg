import { DiscussionItemsTypes } from "./Discussion/types";

export type MetaTypes = {
  page?: number;
  page_size?: number;
  search?: string;
  role_id?: number;
};

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
