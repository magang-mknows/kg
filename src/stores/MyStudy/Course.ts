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
        disscussion: "In Progress",
      },
      progress: "Done",
    },
    {
      conference: 2,
      status: {
        module: "In Progress",
        quiz: "In Progress",
        assignment: "In Progress",
        disscussion: "In Progress",
      },
      progress: "In Progress",
    },
    {
      conference: 3,
      status: {
        module: "In Progress",
        quiz: "In Progress",
        assignment: "In Progress",
        disscussion: "In Progress",
      },
      progress: "In Progress",
    },
  ],
});

export const changedConferencePrograssState = selector({
  key: "change-conference-progress-course",
  get: ({ get }) => {
    const course = get(courseState);
    const temp: Array<string[]> = [];

    for (let i = 0; i < course.length; i++) {
      const statusProperty = Object.keys(course[i].status) as Array<keyof Course["status"]>;
      temp.push([]);
      for (let j = 0; j < statusProperty.length; j++) {
        temp[j]?.push(course[i].status[statusProperty[j]]);
      }
      const arrayOftemp = temp[i].every((item) => item === "Done");
      if (arrayOftemp) {
        course[i].progress = "Done";
      } else if (!arrayOftemp) {
        course[i].progress = "In Progress";
      }
    }
    return course;
  },
});
