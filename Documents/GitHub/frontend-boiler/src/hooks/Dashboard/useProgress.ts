import { ProgressState } from "@/stores/Dashboard";
import { useRecoilState } from "recoil";

type ProgressReturnTypes = {
    setProgress: (val: Array<Progress>) => void;
    getProgress: Array<Progress>;
}

type Progress = {
    judul: string;
    subjudul: string;
    semester: number;
    totalPertemuan: number;
    pertemuanDone: number;
}

export const useProgress = (): ProgressReturnTypes => {
  const [getProgress, setProgress] = useRecoilState(
    ProgressState
  );
  return {
    setProgress: (val:  Array<Progress>) => setProgress(val),
    getProgress: getProgress,
  };
};