import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { MetaTypes } from "../types";

import { serialize } from "object-to-formdata";

export type DiscussionPayloadTypes = {
  title: string;
  content: string;
  images?: File;
  category?: string;
};

const DiscussionService = {
  CreateDiscussion: async (payload: DiscussionPayloadTypes) => {
    const data = serialize(payload);
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data,
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

  GetDiscussion: async (props: MetaTypes) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
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
