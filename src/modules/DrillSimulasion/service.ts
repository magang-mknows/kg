import { handleError } from "@/utilities/helper";
import ApiService from "../../services/Api";
import { TSimulationResponse } from "./type";

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
