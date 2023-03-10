import GlobalButton from "@/components/Common/GlobalButton";
import { FC, ReactElement, Suspense, Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SelectField from "@/components/Common/SelectField";
import { Menu, Transition } from "@headlessui/react";

// asset
import userProfileImg from "@/assets/profile-user-img.svg";
import camera from "@/assets/camera-1.svg";
import BaseLayouts from "@/layouts/Base";

const options = [
  { id: 1, value: "L", label: "Laki-Laki" },
  { id: 2, value: "P", label: "Perempuan" },
];

const EditProfile: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <div className="w-full h-full justify-start px-20 bg-neutral-100">
        <Suspense fallback={"Skeleton loading...."}>
          <div className="font-semibold text-[20px] w-full justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
            Profile
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-[30px]">
            <div className="w-ful lg:w-[600px] lg:h-[50%] space-y-2 justify-center bg-white rounded-lg my-2 lg:my-0">
              <div className="my-4 mx-4 ">
                <GlobalButton
                  text={"Edit Profile"}
                  className="bg-primary-100 !text-[#106FA4] font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                />
                <GlobalButton
                  text={"Reset Password"}
                  className="!text-[#737373] bg-white font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                  to="reset-password"
                />
              </div>
            </div>
            <div className="w-full flex flex-col bg-white rounded-lg mx-0 lg:mx-9">
              <div className="flex flex-col mx-9">
                <div className="font-semibold text-[20px] mt-9">Edit Profile</div>
                <div className="relative w-full my-[16px] border-y">
                  <div className=" flex justify-center py-5 ">
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
                          <Menu.Items className="absolute left-20 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? "bg-neutral-100 text-gray-900" : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Ambil Foto
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? "bg-neutral-100 text-gray-900 " : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Unggah Foto
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <div className="my-2">
                        <p className="font-semibold text-lg">Bandi Aljabar</p>
                        <p className="text-[#737373] px-4">Mahasiswa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="flex flex-col gap-x-4 lg:flex-row my-4">
                    <div className="flex flex-col gap-y-6 w-full">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Email</span>
                        <input
                          type="email"
                          name="email"
                          className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                          placeholder="bandi4lj4b4r@gmail.com"
                        />
                      </label>
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700">
                          Nama Lengkap
                        </span>
                        <input
                          type="text"
                          name="namaLengkap"
                          className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                          placeholder="Bandi Aljabar"
                        />
                      </label>
                    </div>

                    <div className="flex flex-col gap-y-6 w-full rounded-md sm:text-sm focus:ring-1">
                      <SelectField
                        label="Jenis Kelamin"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        defaultValue="Laki-Laki"
                        options={options}
                        value={""}
                        name={""}
                      />

                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700">
                          Nomor Handphone
                        </span>
                        <input
                          type="number"
                          name="namaLengkap"
                          className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                          placeholder="08963728194"
                        />
                      </label>
                      <div className="w-full flex justify-center lg:justify-end">
                        <GlobalButton
                          text={"Simpan"}
                          className="text-bold !w-[153px] !h-[36px] !rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </BaseLayouts>
  );
};

export default EditProfile;
