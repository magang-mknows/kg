import { handleError } from "@/utilities/helper";
import ApiService from "../Api";
import TokenService from "../Token";
const token = TokenService.getToken();
const LeaderboardService = {
  GetAllLeaderboard: async () => {
    const requestData = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: "/leaderboard",
    };
    try {
      const res = await ApiService.customRequest(requestData);

      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default LeaderboardService;
