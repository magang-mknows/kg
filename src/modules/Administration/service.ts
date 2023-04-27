import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { TAdministrationResponse } from "./type";

const AdministrationService = {
  GetAdministration: async (): Promise<TAdministrationResponse> => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/administration",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default AdministrationService;
