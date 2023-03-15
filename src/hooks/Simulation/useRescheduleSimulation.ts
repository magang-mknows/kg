import { useRecoilState } from "recoil";
import { rescheduleSimulasiState } from "@/stores/Simulation";

type RescheduleSimulationTypes = {
    setRescheduleSimulation: (val: string) => void;
    getRescheduleSimulation: string;
}

export const useRescheduleSimulation = (): RescheduleSimulationTypes => {
    const [getReschedule, setReschedule] = useRecoilState(rescheduleSimulasiState);
    return{
        setRescheduleSimulation: (val: string) => setReschedule(val),
        getRescheduleSimulation: getReschedule,
    };
};