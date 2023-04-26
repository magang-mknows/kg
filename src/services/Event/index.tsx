import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { TEventPayload } from "./types";

const EventService = {
  CreateEvent: async (payload: TEventPayload) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/acara-kampus",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  GetEvent: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },

      url: "/acara-kampus",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default EventService;
