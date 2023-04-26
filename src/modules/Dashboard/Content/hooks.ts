import { useRecoilState } from "recoil";
import { selectedEvent } from "@/modules/Dashboard/Content/store";
import { TUseSelectedTask } from "@/modules/Dashboard/Content/type";

export const useSelectedTask = (): TUseSelectedTask => {
  const [getEvent, setEvent] = useRecoilState(selectedEvent);
  return {
    setSelectedEvent: (val: number) => setEvent(val),
    getSelectedEvent: getEvent,
  };
};
