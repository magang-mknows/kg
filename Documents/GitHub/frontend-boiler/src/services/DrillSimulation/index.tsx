import { handleError } from "@/utilities/helper";
import ApiService from "../Api";
import { TSimulationResponse } from "./types";
const SimulationService = {
  GetAllSimulation: async (): Promise<TSimulationResponse> => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/meeting",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default SimulationService;
