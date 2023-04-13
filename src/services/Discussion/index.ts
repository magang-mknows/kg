import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { serialize } from "object-to-formdata";
import TokenService from "../Token";
import { TDiscussionResponse, TDiscussionPayload } from "./types";

const token = TokenService.getToken();

const DiscussionService = {
  CreateDiscussion: async (payload: TDiscussionPayload): Promise<TDiscussionResponse> => {
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
  GetAllDiscussion: async (): Promise<TDiscussionResponse> => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      url: "/discussion",
    };

    try {
      const res = await ApiService.customRequest(requestData);
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
      url: `/discussion/${id}`,
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default DiscussionService;
