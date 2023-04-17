import { TMetaResponseSingle } from "@/services/types";

export type TProfileItem = {
  user?: user;
};

export type user = {
  id: string;
  email: string;
  full_name: string;
  user_name: string;
  avatar: string;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  role: string;
  created_at: string;
  updated_at: string;
};

export type TProfileResponse = TMetaResponseSingle<TProfileItem>;
