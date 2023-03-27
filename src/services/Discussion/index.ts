import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { MetaTypes } from "../types";

type DiscussionPaylaodTpes = {
  nama: string;
  kelas: string;
  nim?: string;
};

const DiscussionService = {
  // CreateAdministration: async (payload: DiscussionPaylaodTpes) => {
  //   const requestData = {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //     data: payload,
  //     url: "/discussion",
  //   };
  //   try {
  //     const res = await ApiService.customRequest(requestData);
  //     ApiService.setHeader();
  //     return res.data;
  //   } catch (error) {
  //     throw handleError(error);
  //   }
  // },

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
