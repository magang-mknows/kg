import AuthService from "@/services/Auth";
import { TLoginPayload, TLoginResponse } from "@/services/Auth/types";
import { TMetaError } from "@/services/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaError,
  TLoginPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ["auth-login"],
    mutationFn: async (data) => await AuthService.Login(data),
  });
};
