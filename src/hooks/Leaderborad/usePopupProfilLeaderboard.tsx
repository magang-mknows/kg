import { useRecoilState } from "recoil";
import { PopupProfilLeaderborad } from "@/stores/Common";

type ReturnTypes = {
  getPopupLeaderboardStatus: boolean;
  setPopupLeaderboardStatus: (val: boolean) => void;
};

export const usePopupProfilLeaderboard = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupProfilLeaderborad);
  return {
    getPopupLeaderboardStatus: get,
    setPopupLeaderboardStatus: (val: boolean) => set(val),
  };
};
