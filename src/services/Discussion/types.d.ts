import { TMetaResponse } from "../types";

export type TDiscussionPayload = {
  title: string;
  content: string;
  images: File;
};

type TDiscussionItem = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  is_global: boolean;
  images: Array<string>;
};

export type TDiscussionResponse = TMetaResponse<TDiscussionItem>;
