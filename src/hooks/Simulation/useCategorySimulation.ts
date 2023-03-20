import { useRecoilState } from "recoil";
import { categorySimulationState } from "@/stores/Simulation";

type CategorySimulationTypes = {
    setCategorySimulation: (val: string) => void;
    getCategorySimulation: string;
}

export const useCategorySimulation = (): CategorySimulationTypes => {
    const [getCategory, setCategory] = useRecoilState(categorySimulationState);
    return{
        setCategorySimulation: (val: string) => setCategory(val),
        getCategorySimulation: getCategory,
    };
};