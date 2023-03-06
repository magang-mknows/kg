import type { NextPage } from "next";
import { ReactElement } from "react";
import Landing from "@/modules/Landing";
import { useRecoilValue } from "recoil";
import { PrivateInformationState } from "@/stores/Administration";

const Index: NextPage = (): ReactElement => {
  const privateInformationStatus = useRecoilValue(PrivateInformationState);
  return (
    <>
      <Landing />
      {privateInformationStatus ? "Aktif" : "Tidak Aktif"}
    </>
  );
};

export default Index;
