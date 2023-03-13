import { useRecoilState } from "recoil";
import { selectedTasks } from "@/stores/Dashboard/TaskCarousel";

type ReturnTypes = {
  setSelectedTask: (val: number) => void;
  getSelectedTask: number;
};

export const useSelectedTask = (): ReturnTypes => {
  const [getTask, setTask] = useRecoilState(selectedTasks);
  return {
    setSelectedTask: (val: number) => setTask(val),
    getSelectedTask: getTask,
  };
};
