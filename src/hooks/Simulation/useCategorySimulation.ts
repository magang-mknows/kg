import { useRecoilState } from "recoil";
import { categorySimulationState, chooseScheduleState } from "@/stores/Simulation";

type CategorySimulationTypes = {
    setCategorySimulation: (val: string) => void;
    getCategorySimulation: string;
}

type ScheduleTypes = {
    setScheduleSimulation: (val: boolean) => void;
    getScheduleSimulation: boolean;
}

export const useCategorySimulation = (): CategorySimulationTypes => {
    const [getCategory, setCategory] = useRecoilState(categorySimulationState);
    return{
        setCategorySimulation: (val: string) => setCategory(val),
        getCategorySimulation: getCategory,
    };
};

export const useScheduleSimulation = (): ScheduleTypes => {
    const [getSchedule, setSchedule] = useRecoilState(chooseScheduleState);
    return{
        setScheduleSimulation: (val: boolean) => setSchedule(val),
        getScheduleSimulation: getSchedule,
    };
};