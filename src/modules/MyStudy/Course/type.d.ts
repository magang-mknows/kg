export type Course = {
  conference: number;
  status: {
    [key: string]: "Done" | "In Progress";
  };
  progress: Array<"Done" | "In Progress">;
  isOpen: boolean;
};
