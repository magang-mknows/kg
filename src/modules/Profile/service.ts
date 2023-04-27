import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import TokenService from "@/services/Token";
import { TProfilePayload, TProfileResponse } from "@/modules/Profile/types";

const token = TokenService.getToken();

const ProfileService = {
  GetUserProfile: async (): Promise<TProfileResponse> => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      url: "/user/profile/me",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
  UpdateUserProfile: async (payload: TProfilePayload): Promise<TProfileResponse> => {
    const data = payload;
    const requestData = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data,
      url: "/user/profile/me",
    };

    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default ProfileService;
