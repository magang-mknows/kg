import { sceduleSimulationState } from "@/stores/Simulation";
import { useRecoilState } from "recoil";
import { T } from "@/stores/Simulation/type";


type ScheduleReturnTypes = {
    setScheduleSimulation: (val: Array<T>) => void;
    getScheduleSimulation: Array<T>;
}


export const useScheduleSimulation = (): ScheduleReturnTypes => {
  const [getSchedule, setSchedule] = useRecoilState(
    sceduleSimulationState
  );
  return {
    setScheduleSimulation: (val:  Array<T>) => setSchedule(val),
    getScheduleSimulation: getSchedule,
  };
};