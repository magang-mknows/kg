import AuthService from "@/services/Auth";
import { AuthPayloadTypes } from "@/utilities/types/Auth";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useLogin = (): UseMutationResult<unknown, unknown, AuthPayloadTypes, unknown> => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["auth-login"],
    mutationFn: async (data: AuthPayloadTypes) => await AuthService.Login(data),
    onSuccess: () => {
      router.push("/");
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
