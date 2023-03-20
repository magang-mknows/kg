import AuthService from "@/services/Auth";
import { AuthPayloadTypes } from "@/utilities/types/Auth";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useLogin = (): UseMutationResult<unknown, unknown, AuthPayloadTypes, unknown> => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["auth-login"],
    mutationFn: async (data: AuthPayloadTypes) => await AuthService.Login(data),
    onSuccess: () => {
      router.push("/");
    },
  });
};
