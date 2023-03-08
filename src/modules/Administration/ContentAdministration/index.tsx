import Card from "@/components/Common/Card";
import MainLayouts from "@/layouts/Main";
import React, { ReactElement } from "react";
import Stepper from "../Common";
import JobsInformation from "../JobsInformation";
import PrivateInformationAccordion from "../PrivateInformationAccordion";

const index = (): ReactElement => {
  return (
    <MainLayouts withPadding={false} className="mt-[40px] lg:px-[70px] md:px-[60px] px-[20px]">
      <div className="flex justify-center">
        <Card hasImage={false} className={"bg-white rounded-[8px] md:w-[95%] w-full"}>
          <div className="w-full relative">
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
