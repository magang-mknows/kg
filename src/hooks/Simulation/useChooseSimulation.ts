import { useRecoilState } from "recoil";
import { chooseSimulasiState } from "@/stores/Simulation";

type ChooseSimulationTypes = {
    setChooseSimulation: (val: string) => void;
    getChooseSimulation: string;
}

export const useChooseSimulation = (): ChooseSimulationTypes => {
    const [getChoose, setChoose] = useRecoilState(chooseSimulasiState);
    return{
        setChooseSimulation: (val: string) => setChoose(val),
        getChooseSimulation: getChoose,
    };
};