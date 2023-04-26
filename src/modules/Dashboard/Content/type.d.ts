export type TUseSelectedEvent = {
  setSelectedEvent: (val: number) => void;
  getSelectedEvent: number;
};

export type TUseSelectedTask = {
  setSelectedTask: (val: number) => void;
  getSelectedTask: number;
};

export type Progress = {
  judul: string;
  subjudul: string;
  semester: number;
  totalPertemuan: number;
  pertemuanDone: number;
};
