import { useRecoilState } from "recoil";
import { LoginModalState } from "@/stores/Auth";

type ReturnTypes = { getLoginModal: boolean; setLoginModal: (val: boolean) => void };

export const useLoginModal = (): ReturnTypes => {
  const [get, set] = useRecoilState(LoginModalState);
  return {
    getLoginModal: get,
    setLoginModal: (val: boolean) => set(val),
  };
};
