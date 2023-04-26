import { atom, selector, selectorFamily } from "recoil";
import { T, HistorySimulation, RescheduleSimulation } from "./type";
import drillDummy from "@/assets/drillSimulation/dummy-drill.svg";
import DummyHistory from "@/assets/drillSimulation/dummy-drillHistory.svg";

//
export const sceduleSimulationState = atom<Array<T>>({
  key: "scedule-simulation-state",
  default: [
    {
      title: "Sejarah Indonesia",
      schedule: 3,
      src: drillDummy,
      dosen: "Pak Rungkad",
      category: "Drill",
      location: "Ruang 1",
    },
    {
      title: "Bahasa Jawa",
      schedule: 0,
      src: drillDummy,
      dosen: "Pak Rungkad",
      category: "Simulasi",
    },
  ],
});

export const historySimulationsState = atom<Array<HistorySimulation>>({
  key: "history-simulations-state",
  default: [
    {
      src: DummyHistory,
      title: "Sejarah Indonesia",
      dosen: "Pak Rungkad",
      date: "27 April 2022",
      time: "15:00",
      status: "selesai",
      slug: "/Penganatar-Sejarah",
    },
    {
      src: DummyHistory,
      title: "Pengantar Indonesia",
      dosen: "Irawan Irawati",
      date: "27 April 2022",
      time: "15:00",
      status: "belum-selesai",
      slug: "/Penganatar-Indonesia",
    },
  ],
});

export const checkRescheduleSimulatiionState = atom<Array<RescheduleSimulation>>({
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

export const chooseSimulasiState = atom({
  key: "reschedule-simulasi-state",
  default: "",
});

export const chooseTimeSimulasiState = atom({
  key: "reschedule-time-simulasi-state",
  default: "",
});

export const categorySimulationState = atom({
  key: "category-simulation-state",
  default: "",
});

export const chooseScheduleState = atom({
  key: "choose-schedule-state",
  default: false,
});

// seacrh
//
export const queryScheduleSimulation = atom({
  key: "query-schedule-simulation",
  default: "",
});

//
export const filterHistorySimulation = selector({
  key: "history-schedule-simulation",
  get: ({ get }) =>
    get(historySimulationsState).filter((item) =>
      item.title.toLowerCase().includes(get(queryScheduleSimulation).toLowerCase()),
    ),
});

export const filterSlug = selectorFamily({
  key: "filter-slug-subject",
  get:
    (query: string) =>
    ({ get }) =>
      get(sceduleSimulationState).filter((item) => (item.title as string).includes(query)),
});
