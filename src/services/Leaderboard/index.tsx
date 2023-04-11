import { handleError } from "@/utilities/helper";
import ApiService from "../Api";
const LeaderboardService = {
  GetAllLeaderboard: async () => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
