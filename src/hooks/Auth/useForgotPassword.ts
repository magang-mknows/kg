import AuthService from "@/services/Auth";
import { AuthPayloadTypes } from "@/utilities/types/Auth";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useForgotPassword = (): UseMutationResult<
  unknown,
  unknown,
  AuthPayloadTypes,
  unknown
> => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["auth-forgot-password"],
    mutationFn: async (data: AuthPayloadTypes) => await AuthService.ForgotPassword(data),
    onSuccess: () => {
      router.push("/auth/login");
    },
    onError: (err) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: "Telah terjadi error",
        text: err as string,
        icon: "error",
      });
    },
  });
};
