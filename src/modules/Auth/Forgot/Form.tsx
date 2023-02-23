import Button from "@/components/Common/Button";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import Form from "@/components/Form";
import { useForgotPassword } from "@/hooks/Auth/useForgotPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ForgotPasswordForm: FC = (): ReactElement => {
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isLoading } = useForgotPassword();

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data, {
        onSuccess: () => {
          console.log("What happen when success");
        },
        onError: (err) => {
          console.log(err);
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
      <ControlledTextField
        control={control}
        type={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Masukan Email Anda"}
        required={true}
        labelClassName="block mb-2 text-sm dark:text-white font-medium text-gray-900 "
      />

      <Button
        disabled={!isValid}
        className="my-4 w-full disabled:bg-slate-400 disabled:text-gray-300 bg-blue-600 text-white font-bold p-3 text-1xl rounded-md"
        text={isLoading ? "Sedang Memuat..." : "Reset Password"}
        type={"submit"}
      />
    </Form>
  );
};

export default ForgotPasswordForm;
