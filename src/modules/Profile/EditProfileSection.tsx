import GlobalButton from "@/components/Common/GlobalButton";
import { FC, ReactElement, Suspense, Fragment } from "react";
import Image from "next/image";
import ControlledSelectField from "@/components/ControlledInputs/ControlledSelectField";
import { Menu, Transition } from "@headlessui/react";
import ControlledTextField from "@/components/ControlledInputs/ControlledTextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Form from "@/components/Form";

import userProfileImg from "@/assets/profile/profile-user-img.svg";
import camera from "@/assets/profile/camera-1.svg";
import BaseLayouts from "@/layouts/Base";
import { useGetUserProfile } from "@/hooks/Profile/useGetUserProfile";

const EditProfile: FC = (): ReactElement => {
  const { data } = useGetUserProfile();
  const userData = data?.data?.user;

  const options = [
    { id: 1, value: "L", label: "Laki-Laki" },
    { id: 2, value: "P", label: "Perempuan" },
  ];

  // const MAX_FILE_SIZE = 3000000;
  // const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/webp", "application/pdf"];

  const validationSchema = z.object({
    // upload_photo: z
    //   .any()
    //   .refine(
    //     (files: File[]) => files !== undefined && files?.length >= 1,
    //     "Harus ada file yang di upload.",
    //   )
    //   .refine(
    //     (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
    //     "Ukuran maksimun adalah 3mb.",
    //   )
    //   .refine(
    //     (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
    //     "hanya menerima .jpg, .jpeg, dan .webp.",
    //   ),

    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    full_name: z.string().min(1, { message: "Nama lengkap harus diisi" }),
    phone_number: z.string().min(1, { message: "nomor handphone harus diisi" }),
    gender: z.any(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: userData?.email,
      full_name: userData?.full_name,
      phone_number: userData?.phone_number,
      gender: userData?.gender,
    },
  });

  return (
    <BaseLayouts>
      <div className="justify-start w-full h-full px-20 bg-neutral-100 dark:bg-black ">
        <Suspense fallback={"Skeleton loading...."}>
          <div className="font-semibold text-[20px] w-full justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
            Profile
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-[30px]">
            <div className="w-full lg:w-[600px] lg:h-[50%] space-y-2 justify-center dark:bg-gray-900 bg-white rounded-lg my-2 lg:my-0">
              <div className="mx-4 my-4 ">
                <GlobalButton
                  text={"Edit Profile"}
                  className="bg-primary-100 dark:bg-[#222529] !text-[#106FA4] font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                />
                <GlobalButton
                  text={"Reset Password"}
                  className="!text-[#737373] dark:bg-[#222529] bg-white font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                  to="ubah-password"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mx-0 bg-white rounded-lg dark:bg-gray-900 lg:mx-9">
              <div className="flex flex-col mx-9">
                <div className="font-semibold text-[20px] mt-9 ">Edit Profile</div>
                <div className="relative w-full my-[16px] border-y">
                  <div className="flex justify-center py-5 ">
                    <div>
                      <Image
                        src={userProfileImg}
                        alt="user profile img"
                        className="w-[100px] h-[100px] z-20"
                      ></Image>

                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="absolute ml-[66px] top-[-40px] bottom-[4px] rounded-full w-[32px] flex justify-center bg-yellow-100 h-[32px] z-50">
                            <Image
                              src={camera}
                              alt="camera"
                              className="w-[15px] h-[11px] mt-[10px]"
                            ></Image>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg left-20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <label className="flex items-center w-full px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-neutral-100 group">
                                <span className="text-sm text-gray-900 ">
                                  Ambil Foto
                                  <input type="file" className="hidden" />
                                </span>
                              </label>
                              <label className="flex items-center w-full px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-neutral-100 group">
                                <span className="text-sm text-gray-900 ">
                                  Unggah Foto
                                  <input type="file" className="hidden" />
                                </span>
                              </label>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <div className="my-2">
                        <p className="text-lg font-semibold">{userData?.full_name}</p>
                        <p className="text-[#737373] px-4">{userData?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Form>
                  <div className="flex flex-col my-4 gap-x-4 lg:flex-row">
                    <div className="flex flex-col w-full mt-0 mr-0 gap-y-2 lg:mr-2 lg:mt-3">
                      <ControlledTextField
                        control={control}
                        placeholder="Masukkan Email"
                        label="Email"
                        type={"email"}
                        hasLabel
                        name="email"
                        className="!h-200px !mt-1 !px-3 !py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                      />
                      <ControlledTextField
                        control={control}
                        placeholder="Masukkan Nama Lengkap"
                        label="Nama Lengkap"
                        type={"text"}
                        hasLabel
                        name="full_name"
                        className=""
                      />
                    </div>

                    <div className="flex flex-col gap-y-2 mr-0 lg:mr-2 w-full mt-0 lg:mt-[26px]">
                      <ControlledSelectField
                        control={control}
                        label="Jenis Kelamin"
                        className="mt-1 px-3 py-2 lg:pt-[-10px] bg-white dark:bg-[#222529] dark:border-2 shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm"
                        defaultValue="Laki-Laki"
                        options={options}
                        value={""}
                        name={""}
                      />

                      <ControlledTextField
                        control={control}
                        placeholder="Masukkan Nomor Handphone"
                        label="Nomor Handphone"
                        type={"text"}
                        hasLabel
                        name="phone_number"
                        className="!h-200px !mt-1 !px-3 !py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block !w-full !rounded-md sm:text-sm focus:ring-1"
                      />
                      <div className="flex justify-center w-full lg:justify-end">
                        <GlobalButton
                          text={"Simpan"}
                          type={"submit"}
                          disabled={!isValid}
                          className="rounded-[8px] !w-[95px] !h-[36px]  disabled:bg-gray-400 disabled:text-gray-200"
                        />
                      </div>
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

export default EditProfile;
