import AuthService from "@/services/Auth";
import { AuthPayloadTypes } from "@/utilities/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["auth-register"],
    mutationFn: async (data: AuthPayloadTypes) => await AuthService.Register(data),
    onSuccess: () => {
      router.push("/auth/login");
    },
  });
};
