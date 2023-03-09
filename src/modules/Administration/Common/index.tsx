import { FC, ReactElement } from "react";

import { usePrivateInformationStatus } from "@/hooks/Administration/usePrivateInformationStatus";
import { BiCheck } from "react-icons/bi";

const Stepper: FC = (): ReactElement => {
  const { getPrivateStatus } = usePrivateInformationStatus();
  return (
    <div className="flex justify-center mt-[48px] mb-[40px]">
      <section className="flex flex-col justify-center items-center gap-y-2 relative mr-1 lg:mr-14">
        <span
          className={`${
            getPrivateStatus ? "border-green-500 bg-green-500" : "border-[#9CA3AF] bg-white"
          } h-7 w-7  flex justify-center items-center rounded-full border-2  relative`}
        >
          {getPrivateStatus ? (
            <BiCheck color="white" />
          ) : (
            <span className="  bg-[#9CA3AF] h-2 w-2 block rounded-full"></span>
          )}
          <section
            className={` ${
              getPrivateStatus ? "bg-green-500" : "bg-[#9CA3AF]/50"
            } h-[2px] w-24 lg:w-36  absolute left-[25px]`}
          >
            {getPrivateStatus && (
              <span className="text-sm text-green-500 font-normal absolute left-14 bottom-2">
                20%
              </span>
            )}
          </section>
        </span>
        <h1 className="text-xs text-center">Informasi Pribadi</h1>
      </section>
      <section className="flex flex-col justify-center items-center gap-y-2 relative mr-1 lg:mr-14">
        <span
          className={`${
            getPrivateStatus ? "border-green-500  bg-white " : "border-[#9CA3AF] "
          } h-7 w-7  flex justify-center items-center rounded-full border-2  relative`}
        >
          <span
            className={`${
              getPrivateStatus ? "bg-green-500" : "bg-[#9CA3AF]"
            }  h-2 w-2 block rounded-full`}
          ></span>
          <section className="h-[2px] w-24 lg:w-36 bg-[#9CA3AF]/50 absolute left-[25px]"></section>
        </span>
        <h1 className="text-xs text-center">Informasi Pekerjaan</h1>
      </section>
      <section className="flex flex-col justify-center items-center gap-y-2 relative">
        <span className="h-7 w-7 border-[#9CA3AF] flex justify-center items-center rounded-full border-2 bg-white relative">
          <span className="h-2 w-2 bg-[#9CA3AF] block rounded-full"></span>
        </span>
        <h1 className="text-xs text-center">Informasi Berkas</h1>
      </section>

      {/* <span className=" flex flex-col">
        <Image
          src={getPrivateStatus ? stepperPrivateInformationDone : stepper}
          alt={"stepper-icon"}
          className="w-full"
        />
        <div className="mt-[6px] -ml-8 text-[12px]">Informasi Pribadi</div>
      </span>

      <span className=" flex flex-col">
        <Image src={stepper} alt={"stepper-icon"} className="w-full" />
        <div className="mt-[6px] -ml-8 text-[12px]">Informasi Pekerjaan</div>
      </span>
      <span>
        <Image src={stepperCircle} alt={"stepper-icon"} />
        <div className="mt-[6px] -ml-8 text-[12px]  ">Informasi Berkas</div>
      </span> */}
    </div>
  );
};

export default Stepper;
