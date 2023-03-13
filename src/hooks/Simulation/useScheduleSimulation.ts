import { sceduleSimulationState } from "@/stores/Simulation";
import { useRecoilState } from "recoil";
import { StaticImageData } from "next/image";


type ScheduleReturnTypes = {
    setScheduleSimulation: (val: Array<T>) => void;
    getScheduleSimulation: Array<T>;
}

type T = {
  schedule: number;
  src: StaticImageData;
  dosen: string;
  category: string;
  title: string;
  slug: string
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