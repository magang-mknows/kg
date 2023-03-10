import { useRecoilState } from "recoil";
import { FileInformationState } from "@/stores/Administration";

type ReturnTypes = {
  setFileStatus: (val: boolean) => void;
  getFileStatus: boolean;
};

export const useFileInformationStatus = (): ReturnTypes => {
  const [getStatus, setStatus] = useRecoilState(FileInformationState);
  return {
    setFileStatus: (val: boolean) => setStatus(val),
    getFileStatus: getStatus,
  };
};
