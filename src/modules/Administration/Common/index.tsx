import { PrivateInformationState } from "@/stores/Administration";
import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";

const Stepper: FC = (): ReactElement => {
  const privateInformationStatus = useRecoilValue(PrivateInformationState);
  return (
    <>
      <span>Stepper 1 {privateInformationStatus}</span>
      <span>Stepper 2</span>
      <span>Stepper 3</span>
    </>
  );
};

export default Stepper;
