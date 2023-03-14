import { useRecoilState } from "recoil";
import { selectedEvent } from "@/stores/Dashboard/EventCarousel";

type ReturnTypes = {
  setSelectedEvent: (val: number) => void;
  getSelectedEvent: number;
};

export const useSelectedTask = (): ReturnTypes => {
  const [getEvent, setEvent] = useRecoilState(selectedEvent);
  return {
    setSelectedEvent: (val: number) => setEvent(val),
    getSelectedEvent: getEvent,
  };
};
