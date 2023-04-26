import ApiService from "@/services/Api";
import TokenService from "@/services/Token";
import { handleError } from "@/utilities/helper";
import { TForgotPayload, TLoginPayload, TLoginResponse, TRegisterPayload } from "./types";

const AuthService = {
  Login: async (payload: TLoginPayload): Promise<TLoginResponse> => {
    const { email, password } = payload;
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email, password },
      url: "/auth/login",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      TokenService.saveToken(res.data.access_token);
      TokenService.saveRefreshToken(res.data.refresh_token);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  Logout: () => {
    ApiService.removeHeader();
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    window.location.reload();
  },

  Register: async (payload: TRegisterPayload) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/auth/register",
    };
    try {
      await ApiService.customRequest(requestData);
    } catch (error) {
      throw handleError(error);
    }
  },

  ForgotPassword: async (payload: TForgotPayload) => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/auth/forgot-password",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  RefreshToken: async () => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        refresh_token: TokenService.getRefreshToken(),
      },
      url: "/auth/refresh",
    };
    try {
      const response = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default AuthService;
