import SimulationService from "@/services/DrillSimulation";
import { TSimulationResponse } from "@/services/DrillSimulation/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetAllSimulation = (): UseQueryResult<TSimulationResponse, unknown> =>
    useQuery<TSimulationResponse>({
        queryKey: ["get-all-simulation"],
        queryFn: async()=>await SimulationService.GetAllSimulation()
    });
