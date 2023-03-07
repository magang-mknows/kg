import { PrivateInformationState } from "@/stores/Administration";
import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import stepper from "@/assets/stepper.svg";
import stepperCircle from "@/assets/stepper-circle.svg";
import Image from "next/image";

const Stepper: FC = (): ReactElement => {
  const privateInformationStatus = useRecoilValue(PrivateInformationState);
  return (
    <div className="flex justify-center mt-[48px] mb-[40px] mx-auto">
      <span className=" flex flex-col">
        <Image src={stepper} alt={"stepper-icon"} className="flex flex-col" />{" "}
        {privateInformationStatus}
        <h1 className="mt-[6px] -ml-10">Informasi Pribadi</h1>
      </span>
      <span className=" flex flex-col">
        <Image src={stepper} alt={"stepper-icon"} /> {privateInformationStatus}
        <h1 className="mt-[6px] -ml-10">Informasi Pekerjaan</h1>
      </span>
      <span>
        <Image src={stepperCircle} alt={"stepper-icon"} /> {privateInformationStatus}
        <h1 className="mt-[6px] -ml-10">Informasi Berkas</h1>
      </span>
    </div>
  );
};

export default Stepper;
