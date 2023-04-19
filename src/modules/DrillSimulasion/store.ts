import { atom, selector, selectorFamily } from "recoil";
import drillDummy from "@/assets/drillSimulation/dummy-drill.svg";
import DummyHistory from "@/assets/drillSimulation/dummy-drillHistory.svg";
import { HistorySimulation, T } from "./type";

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

export const PopupModalSubmissionOpen = atom({
    key: "modal-popup-submission",
    default: false,
  });

