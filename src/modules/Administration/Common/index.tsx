import { FC, ReactElement } from "react";
import stepper from "@/assets/stepper.svg";
import stepperCircle from "@/assets/stepper-circle.svg";
import Image from "next/image";
import { usePrivateInformationStatus } from "@/hooks/Administration/usePrivateInformationStatus";
import stepperPrivateInformationDone from "@/assets/stepper-30.svg";

const Stepper: FC = (): ReactElement => {
  const { getPrivateStatus } = usePrivateInformationStatus();
  return (
    <div className="flex justify-center mt-[48px] mb-[40px] mx-auto md:px-0 px-10">
      <span className=" flex flex-col">
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
      </span>
    </div>
  );
};

export default Stepper;
