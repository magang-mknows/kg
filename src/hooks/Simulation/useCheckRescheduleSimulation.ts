import { checkRescheduleSimulatiionState } from "@/stores/Simulation";
import { useRecoilState } from "recoil";
import { RescheduleSimulation } from "@/stores/Simulation/type";


type CheckRescheduleReturnTypes = {
    setCheckResheduleSimulation: (val: Array<RescheduleSimulation>) => void;
    getCheckRescheduleSimulation: Array<RescheduleSimulation>;
}

export const useCheckRescheduleSimulation = (): CheckRescheduleReturnTypes => {
  const [getCheckReschedule, setCheckReschedule] = useRecoilState(
    checkRescheduleSimulatiionState
  );
  return {
    setCheckResheduleSimulation: (val:  Array<RescheduleSimulation>) => setCheckReschedule(val),
    getCheckRescheduleSimulation: getCheckReschedule,
  };
};