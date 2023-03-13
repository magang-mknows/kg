import { FC, ReactElement } from "react";
import TabelSubmission from "@/components/StudyPlan/TabelSubmission";
import Alert from "@/components/StudyPlan/Alert";

const Submission: FC = (): ReactElement => {
  return (
    <>
      <Alert detail="Estimasi proses pengajuan adalah maksimal 7 hari" />
      <TabelSubmission />
    </>
  );
};

export default Submission;
