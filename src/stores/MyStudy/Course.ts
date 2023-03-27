import { atom, selector } from "recoil";
import { Course } from "./type";

export const courseState = atom<Array<Course>>({
  key: "course-state",
  default: [
    {
      conference: 1,
      status: {
        module: "Done",
        quiz: "Done",
        assignment: "Done",
        disscussion: "Done",
      },
      progress: [],
      isOpen: true,
    },
    {
      conference: 2,
      status: {
        module: "Done",
        quiz: "In Progress",
        assignment: "Done",
        disscussion: "In Progress",
      },
      progress: ["In Progress", "In Progress", "In Progress", "In Progress"],
      isOpen: false,
    },
    {
      conference: 3,
      status: {
        module: "In Progress",
        quiz: "In Progress",
        assignment: "In Progress",
        disscussion: "In Progress",
      },
      progress: ["In Progress", "In Progress", "In Progress", "In Progress"],
      isOpen: false,
    },
  ],
});

export const moduleState = atom({
  key: "module",
  default: false,
});
export const quizState = atom({
  key: "quiz",
  default: false,
});
export const assigmentState = atom({
  key: "tugas",
  default: false,
});
export const discusionState = atom({
  key: "diskusi",
  default: false,
});

export const changedConferencePrograssState = selector({
  key: "change-conference-progress-course",
  get: ({ get }) => get(courseState),
  set: ({ set }, newCourse) => set(courseState, newCourse),
});
