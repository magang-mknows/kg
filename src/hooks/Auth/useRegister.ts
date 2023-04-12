import AuthService from "@/services/Auth";
import { TRegisterPayload } from "@/services/Auth/types";
import { TMetaError } from "@/services/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useRegister = (): UseMutationResult<
  unknown,
  TMetaError,
  TRegisterPayload,
  unknown
> => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["auth-register"],
    mutationFn: async (data) => await AuthService.Register(data),
    onSuccess: () => {
      router.push("/auth/login");
    },
    onError: (err) => {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: "Telah terjadi error",
        text: err.message,
        icon: "error",
      });
    },
  });
};
