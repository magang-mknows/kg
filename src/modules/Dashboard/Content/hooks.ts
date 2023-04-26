import { useRecoilState } from "recoil";
import { ProgressState, selectedEvent, selectedTasks } from "@/modules/Dashboard/Content/store";
import {
  Progress,
  ProgressReturnTypes,
  TUseSelectedEvent,
  TUseSelectedTask,
} from "@/modules/Dashboard/Content/type";

export const useSelectedEvent = (): TUseSelectedEvent => {
  const [getEvent, setEvent] = useRecoilState(selectedEvent);
  return {
    setSelectedEvent: (val: number) => setEvent(val),
    getSelectedEvent: getEvent,
  };
};

export const useSelectedTask = (): TUseSelectedTask => {
  const [getTask, setTask] = useRecoilState(selectedTasks);
  return {
    setSelectedTask: (val: number) => setTask(val),
    getSelectedTask: getTask,
  };
};

export const useProgress = (): ProgressReturnTypes => {
  const [getProgress, setProgress] = useRecoilState(ProgressState);
  return {
    setProgress: (val: Array<Progress>) => setProgress(val),
    getProgress: getProgress,
  };
};
