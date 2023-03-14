import { FC, ReactElement } from "react";
import TabelPretest from "@/components/StudyPlan/TabelPretest";
import Alert from "@/components/StudyPlan/Alert";

const PreTest: FC = (): ReactElement => {
  return (
    <>
      <Alert detail="Silahkan upload bukti telah pernah mengikuti mata kuliah dibawah ini agar bisa dikonversi" />
      <TabelPretest />
    </>
  );
};

export default PreTest;
