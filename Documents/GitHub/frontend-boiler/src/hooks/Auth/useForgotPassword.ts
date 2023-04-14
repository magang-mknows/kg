import { useRouter } from "next/router";
import { TMetaError } from "@/services/types";
import { TForgotPayload } from "@/services/Auth/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import AuthService from "@/services/Auth";

export const useForgotPassword = (): UseMutationResult<
  unknown,
  TMetaError,
  TForgotPayload,
  unknown
> => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["auth-forgot-password"],
    mutationFn: async (data) => await AuthService.ForgotPassword(data),
    onSuccess: () => {
      router.push("/auth/login");
    },
  });
};
