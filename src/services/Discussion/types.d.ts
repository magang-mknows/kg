import { TMetaResponseSingle } from "../types";

export type TDiscussionPayload = {
  title: string;
  content: string;
  images: File;
};

type TCreateDiscussionItem = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  is_global: boolean;
  images: Array<string>;
};

export type TCreateDiscussionResponse = TMetaResponseSingle<TCreateDiscussionItem>;
