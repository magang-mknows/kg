import { useRecoilState } from "recoil";
import { AdministrationStatusState } from "@/stores/Administration";

type StatusReturnTypes = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export const useAdministrationStatus = (): StatusReturnTypes => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};
