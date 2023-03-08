import { useRecoilState } from "recoil";
import { PrivateInformationState } from "@/stores/Administration";

type ReturnTypes = {
  setPrivateStatus: (val: boolean) => void;
  getPrivateStatus: boolean;
};

export const usePrivateInformationStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PrivateInformationState);
  return {
    setPrivateStatus: (val: boolean) => set(val),
    getPrivateStatus: get,
  };
};
