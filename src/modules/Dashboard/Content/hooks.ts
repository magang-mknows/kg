import { useRecoilState } from "recoil";
import { selectedEvent, selectedTasks } from "@/modules/Dashboard/Content/store";
import { TUseSelectedEvent, TUseSelectedTask } from "@/modules/Dashboard/Content/type";

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
