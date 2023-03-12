import TokenService from "@/services/Token";
import { atom } from "recoil";

export const AuthenticatedStatus = atom({
  key: "protected-routes",
  default: typeof window !== "undefined" && !!TokenService.getToken(),
});

export const LoginModalState = atom<boolean>({
  key: "login-modal-state",
  default: false,
});
