import { useRecoilState } from "recoil";
import { timereschduleSimulasiState } from "@/stores/Simulation";

type TimeRescheduleSimulationTypes = {
    setTimeRescheduleSimulation: (val: string) => void;
    getTimeRescheduleSimulation: string;
}

export const useTimeRescheduleSimulation = (): TimeRescheduleSimulationTypes =>{
    const [getTimeReschedule, setTimeReschedule] = useRecoilState(timereschduleSimulasiState);
    return{
        setTimeRescheduleSimulation: (val: string) => setTimeReschedule(val),
        getTimeRescheduleSimulation: getTimeReschedule,
    };
};