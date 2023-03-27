import { CommonResponseInterface } from "../types";

export type DiscussionItemsTypes = {
  nama: string;
  nim: string;
  kelas: string;
};

export type DiscussionResponseTypes = CommonResponseInterface<DiscussionItemsTypes>;
