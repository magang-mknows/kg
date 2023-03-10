import GlobalButton from "@/components/Common/GlobalButton";
import BaseLayouts from "@/layouts/Base";
import { FC, ReactElement, Suspense } from "react";

const ResetPassword: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <div className="w-full justify-center lg:justify-start px-20 bg-neutral-100">
        <Suspense fallback={"Skeleton loading...."}>
          <div className="font-semibold text-[20px] w-full justify-center lg:justify-start mb-[12px] lg:mb-[48px] mt-[30px]">
            Profile
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-[30px]">
            <div className="w-full lg:w-[600px]  justify-center bg-white rounded-lg h-[50%] my-2 lg:my-0">
              <div className="my-4 mx-4 space-y-4 lg:space-y-2">
                <GlobalButton
                  text={"Edit Profile"}
                  className=" !text-[#737373] bg-white font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                  to="/edit-profile"
                />
                <GlobalButton
                  text={"Reset Password"}
                  className=" bg-primary-100 !text-[#106FA4] font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2 !lg:h-[36px] !h-[36px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col bg-white rounded-lg mx-0 lg:mx-9">
              <div className="flex flex-col mx-9">
                <div className="font-semibold text-[20px] mt-9">Reset Password</div>
                <form>
                  <div className="relative w-full my-[16px] border-y">
                    <label className="block py-4">
                      <span
                        className="block text-sm font-medium text-[
#10002E]"
                      >
                        Password Lama
                      </span>
                      <input
                        type="password"
                        name="oldPassword"
                        className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                        placeholder="Masukkan Password Lama"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-y-6 w-full rounded-md sm:text-sm focus:ring-1">
                    <label className="block">
                      <span
                        className="block text-sm font-medium text-[
#10002E]"
                      >
                        Password Baru
                      </span>
                      <input
                        type="password"
                        name="newPassword"
                        className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                        placeholder="Masukkan Password Baru"
                      />
                    </label>
                    <label className="block">
                      <span
                        className="block text-sm font-medium text-[
#10002E]"
                      >
                        Konfirmasi Password
                      </span>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                        placeholder="Masukkan Password Baru"
                      />
                    </label>
                    <div className="w-full flex justify-center lg:justify-end my-8">
                      <GlobalButton
                        text={"Reset Password"}
                        className="text-semibold !w-[153px] !h-[36px] !rounded-lg"
                      />
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

export default ResetPassword;
