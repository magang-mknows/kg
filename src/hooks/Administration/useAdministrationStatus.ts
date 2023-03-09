import { useRecoilState } from "recoil";
import { AdministrationStatusState } from "@/stores/Administration";

type ReturnTypes = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export const useAdministrationStatus = (): ReturnTypes => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};
