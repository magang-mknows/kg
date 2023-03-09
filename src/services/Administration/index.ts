import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { MetaTypes } from "../types";

type AdministrationPaylaodTpes = {
  nama: string;
  kelas: string;
  nim?: string;
};

const AdministrationService = {
  CreateAdministration: async (payload: AdministrationPaylaodTpes) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/administration",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  GetAdministration: async (props: MetaTypes) => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      params: props,
      url: "/administration",
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
export default AdministrationService;
