import { historySimulationsState } from "@/stores/Simulation";
import { HistorySimulation } from "@/stores/Simulation/type";
import { useRecoilState } from "recoil";

type HistorySimulationTypes = {
    setHistorySimulation: (val: Array<HistorySimulation>) => void;
    getHistorySimulation: Array<HistorySimulation>
}

export const useHistorySimulation = (): HistorySimulationTypes =>{
    const [getHistory, setHistory] = useRecoilState(historySimulationsState);
    return {
        setHistorySimulation: (val:Array<HistorySimulation>) =>setHistory(val),
        getHistorySimulation: getHistory,
    };
};