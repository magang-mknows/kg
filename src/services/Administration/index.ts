import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { TAdministrationResponse } from "./types";

const AdministrationService = {
  GetAdministration: async (): Promise<TAdministrationResponse> => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
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
