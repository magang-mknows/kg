import { atom, selector } from "recoil";
import { T } from "./type";
import drillDummy from "@/assets/dummy-drill.svg";
import DummyHistory from "@/assets/dummy-drillHistory.svg";
import { HistorySimulation } from "./type";

export const sceduleSimulationState = atom<Array<T>>({
  key: "scedule-simulation-state",
  default: [
    // {
    //   title: "Contoh 1",
    //   schedule: 3,
    //   src: drillDummy,
    //   dosen: "Pak P",
    //   category: "Drill",
    //   slug: "/Contoh-1",
    // },
    // {
    //   title: "Example 2",
    //   schedule: 0,
    //   src: drillDummy,
    //   dosen: "Pak P",
    //   category: "Simulasi",
    //   slug: "/Example-2",
    // },
  ],
});

export const historySimulationsState = atom<Array<HistorySimulation>>({
  key: "history-simulations-state",
  default: [
    // {
    //   src: DummyHistory,
    //   title: "Pengantar Sejarah",
    //   dosen: "Irawan Irawati",
    //   date: "27 April 2022",
    //   time: "15:00",
    //   status: "selesai",
    // },
    // {
    //   src: DummyHistory,
    //   title: "Pengantar Sejarah",
    //   dosen: "Irawan Irawati",
    //   date: "27 April 2022",
    //   time: "15:00",
    //   status: "belum-selesai",
    // },
  ],
});

// seacrh
export const queryScheduleSimulation = atom({
  key: "query-schedule-simulation",
  default: "",
});

export const filterScheduleSimulation = selector({
  key: "filter-schedule-simulation",
  get: ({ get }) =>
    get(sceduleSimulationState).filter((item) =>
      item.title.toLowerCase().includes(get(queryScheduleSimulation).toLowerCase()),
    ),
});
