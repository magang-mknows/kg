import { AuthenticatedStatus } from "@/stores/Auth";
import { useRecoilState } from "recoil";

type TReturn = {
  getAuth: boolean;
  setAuth: (val: boolean) => void;
};

export const useAuth = (): TReturn => {
  const [get, set] = useRecoilState(AuthenticatedStatus);
  return {
    getAuth: get,
    setAuth: (val: boolean) => set(val),
  };
};
