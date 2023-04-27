import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { TAdministrationResponse, TBiodataAdm } from "./type";

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

  UpdateBiodataAdm: async (payload: TBiodataAdm): Promise<TAdministrationResponse> => {
    const data = payload;
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data,
      url: "/administration/biodata",
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
