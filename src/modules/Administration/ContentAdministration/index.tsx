import MainLayouts from "@/layouts/Main";
import React, { ReactElement } from "react";
import FileInformation from "../FileInformation";
import JobsInformation from "../JobsInformation";
import PrivateInformationAccordion from "../PrivateInformationAccordion";

const index = (): ReactElement => {
  return (
    <MainLayouts>
      <JobsInformation />
      <PrivateInformationAccordion />
      <FileInformation />
    </MainLayouts>
  );
};

export default index;
