import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { serialize } from "object-to-formdata";
import { TCreateDiscussionResponse, TDiscussionPayload } from "./types";

const DiscussionService = {
  CreateDiscussion: async (payload: TDiscussionPayload): Promise<TCreateDiscussionResponse> => {
    const data = serialize(payload);
    const requestData = {
      method: "post",
      withCrededentials: true,
      headers: {
        "Content-Type": "application/json",
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
  GetAllDiscussion: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
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

  GetDiscussion: async (id: number) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: `/discussion/forum/${id}`,
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
