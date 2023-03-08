import GlobalButton from "@/components/Common/GlobalButton";
import { FC, ReactElement } from "react";

const EditProfile: FC = (): ReactElement => {
  return (
    <div className="w-full justify-start px-20">
      <div className="font-semibold text-[20px] w-full justify-start mb-[48px] mt-[30px]">
        Profile
      </div>
      <div className="flex flex-row w-full mb-[30px]">
        <div className="w-[800px] space-y-2 justify-center bg-white rounded-lg">
          <div className="my-4 mx-4 ">
            <GlobalButton
              text={"Edit Profile"}
              className="bg-primary-100 text-primary-500 font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2"
            />
            <GlobalButton
              text={"Reset Password"}
              className="text-neutral-600 bg-white font-semibold text-sm !w-[96%] !justify-start pl-3 my-3 mx-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-col bg-white rounded-lg">
          <div className="font-semibold text-[20px]">Edit Profile</div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
