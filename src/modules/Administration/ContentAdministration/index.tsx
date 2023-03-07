import Card from "@/components/Common/Card";
import MainLayouts from "@/layouts/Main";
import React, { ReactElement } from "react";
import Stepper from "../Common";
import JobsInformation from "../JobsInformation";
import PrivateInformationAccordion from "../PrivateInformationAccordion";

const index = (): ReactElement => {
  return (
    <MainLayouts className="mt-[40px]">
      <div className="flex justify-center">
        <Card hasImage={false} className={"bg-white rounded-[8px] w-[95%]"}>
          <div className="w-full">
            <Stepper />
            <PrivateInformationAccordion />
            <JobsInformation />
          </div>
        </Card>
      </div>
    </MainLayouts>
  );
};

export default index;
