import { CommonResponseInterface } from "../types";

export type DiscussionItemsTypes = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  is_global: string;
  category: string;
  updated_at?: Date;
  created_at?: Date;
  deleted_at?: Date;
};

export type DiscussionResponseTypes = CommonResponseInterface<DiscussionItemsTypes>;
