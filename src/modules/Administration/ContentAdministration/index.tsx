import MainLayouts from "@/layouts/Main";
import React, { ReactElement } from "react";
import JobsInformation from "../JobsInformation";
import PrivateInformationAccordion from "../PrivateInformationAccordion";

const index = (): ReactElement => {
  return (
    <MainLayouts>
      <JobsInformation />
      <PrivateInformationAccordion />
    </MainLayouts>
  );
};

export default index;
