import { atom } from "recoil";
import { RescheduleSimulation } from "./type";

export const categorySimulationState = atom({
    key: "category-simulation-state",
    default: "",
  });
  
export const chooseScheduleState = atom({
    key: "choose-schedule-state",
    default: false,
  });
export const chooseSimulasiState = atom({
    key: "reschedule-simulasi-state",
    default: "",
  });
export const PopupModalScheduleOpen = atom({
    key: "modal-popup-schedule",
    default: false,
  });
export const ChooseTimeSimulasiState = atom({
    key: "reschedule-time-simulasi-state",
    default: "",
  });

export const CheckRescheduleSimulationState = atom<Array<RescheduleSimulation>>({
    key: "check-reschedule-simulatiion-state",
    default: [
      {
        date: "Senin, 27 Juli 2021",
        time: [
          {
            time: "30:00",
          },
          {
            time: "32:00",
          },
        ],
      },
      {
        date: "Selasa, 2 Juli 2021",
        time: [
          {
            time: "20:00",
          },
          {
            time: "12:00",
          },
        ],
      },
      {
        date: "Rabu, 5 April 2021",
        time: [
          {
            time: "24:00",
          },
          {
            time: "02:00",
          },
        ],
      },
    ],
  });
  
  

  