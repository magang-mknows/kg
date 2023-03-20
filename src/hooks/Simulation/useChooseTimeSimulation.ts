import { useRecoilState } from "recoil";
import { chooseTimeSimulasiState } from "@/stores/Simulation";

type chooseTimeSimulasiTypes = {
    setChooseTimeSimulation: (val: string) => void;
    getChooseTimeSimulation: string;
}

export const useChooseTimeSimulation = (): chooseTimeSimulasiTypes =>{
    const [getTimeReschedule, setTimeReschedule] = useRecoilState(chooseTimeSimulasiState);
    return{
        setChooseTimeSimulation: (val: string) => setTimeReschedule(val),
        getChooseTimeSimulation: getTimeReschedule,
    };
};