import { atom, selector } from "recoil";
import { T } from "./type";
import drillDummy from "@/assets/dummy-drill.svg";

export const sceduleSimulationState = atom<Array<T>>({
  key: "scedule-simulation-state",
  default: [
    {
      title: "Tes",
      schedule: 3,
      src: drillDummy,
      dosen: "Pak P",
      category: "Drill",
    },
    {
      title: "Tes",
      schedule: 0,
      src: drillDummy,
      dosen: "Pak P",
      category: "Drill",
    },
    {
      title: "Tes",
      schedule: 1,
      src: drillDummy,
      dosen: "Pak P",
      category: "Drill",
    },
    {
      title: "Tes",
      schedule: 0,
      src: drillDummy,
      dosen: "Pak P",
      category: "Drill",
    },
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
