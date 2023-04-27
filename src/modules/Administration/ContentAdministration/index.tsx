import Card from "@/components/Common/Card";
import MainLayouts from "@/layouts/Main";
import { ReactElement } from "react";
import Stepper from "../Common";
import FileInformation from "../FileInformation";
import JobsInformation from "../JobsInformation";
import PrivateInformationAccordion from "../PrivateInformationAccordion";
import { useFetchAllAdministration } from "../hooks";

const index = (): ReactElement => {
  const { data } = useFetchAllAdministration();
  console.log("cek", data);
  return (
    <MainLayouts withPadding={false} className="mt-[40px] lg:px-[70px] md:px-[60px] px-[20px]">
      <div className="flex justify-center">
        <Card hasImage={false} className={"bg-white rounded-[8px] md:w-[95%] w-full"}>
          <div className="w-full relative">
            <Stepper />
            <PrivateInformationAccordion />
            <JobsInformation />
            <FileInformation />
          </div>
        </Card>
      </div>
    </MainLayouts>
  );
};

export default index;
