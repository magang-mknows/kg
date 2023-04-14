import GlobalButton from "@/components/Common/GlobalButton";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, Suspense } from "react";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Form from "@/components/Form";

const ResetPassword: FC = (): ReactElement => {
  const validationSchema = z.object({
    oldPassword: z.string().min(1, { message: "Password Lama harus diisi" }),
    newPassword: z.string().min(1, { message: "Password baru harus diisi" }),
    confirmPassword: z.string().min(1, { message: "Konfirmasi password baru harus diisi" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });
  return (
    <BaseLayouts>
      <div className="w-full justify-center lg:justify-start px-20 bg-neutral-100 dark:bg-black">
        <Suspense fallback={"Skeleton loading...."}>
          <div className="font-semibold text-[20px] w-full justify-center lg:justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
            Profile
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-[30px]">
            <div className="w-full lg:w-[600px]  justify-center dark:bg-gray-900 bg-white rounded-lg h-[50%] my-2 lg:my-0">
              <div className="my-4 mx-4 space-y-4 lg:space-y-2">
                <GlobalButton
                  text={"Edit Profile"}
                  className=" !text-[#737373] dark:bg-[#222529] bg-white font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                  to="ubah-profile"
                />
                <GlobalButton
                  text={"Reset Password"}
                  className=" bg-primary-100 dark:bg-[#222529] !text-[#106FA4] font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col bg-white rounded-lg mx-0 lg:mx-9 dark:bg-gray-900">
              <div className="flex flex-col mx-9">
                <div className="font-semibold text-[20px] mt-9 dark:text-white">Reset Password</div>
                <Form>
                  <div className="relative w-full my-[16px] border-y px-3 py-6 ">
                    <ControlledTextField
                      control={control}
                      placeholder="Masukkan Password lama"
                      label="Password Lama"
                      labelClassName="dark:text-white"
                      type={"password"}
                      hasLabel
                      name="oldPassword"
                      className="mt-1 dark:bg-blacks bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                    />
                  </div>

                  <div className="flex flex-col gap-y-4 w-full rounded-md focus:ring-1 px-3 ">
                    <ControlledTextField
                      control={control}
                      placeholder="Masukkan Password lama"
                      label="Password Baru"
                      labelClassName="dark:text-white"
                      type={"password"}
                      hasLabel
                      name="newPassword"
                      className="mt-1  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                    />
                    <ControlledTextField
                      control={control}
                      placeholder="Konfirmasi Password Baru"
                      label="Konfirmasi Password"
                      type={"password"}
                      hasLabel
                      name="confirmPassword"
                      className="mt-1  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                    />

                    <div className="w-full flex justify-center lg:justify-end my-8">
                      <GlobalButton
                        text={"Reset Password"}
                        className="text-semibold !w-[153px] !h-[36px] !rounded-lg disabled:bg-gray-400 disabled:text-gray-200"
                        disabled={!isValid}
                      />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </BaseLayouts>
  );
};

export default ResetPassword;
