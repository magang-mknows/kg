import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { MetaTypes } from "../types";

import { serialize } from "object-to-formdata";
import TokenService from "../Token";

export type DiscussionPayloadTypes = {
  title: string;
  content: string;
  images?: File;
  category?: string;
};

const token = TokenService.getToken();

const DiscussionService = {
  CreateDiscussion: async (payload: DiscussionPayloadTypes) => {
    const data = serialize(payload);

    console.log(token);

    const requestData = {
      method: "post",
      withCrededentials: true,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      data,
      url: "/discussion/forum/6bc3b730-8c7d-41f0-a1dc-03bac621a825",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  GetDiscussion: async (props: MetaTypes) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      params: props,
      url: "/discussion",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default DiscussionService;
