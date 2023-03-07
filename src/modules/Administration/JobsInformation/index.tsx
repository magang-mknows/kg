import { FC, ReactElement, useState } from "react";
import Accordion from "@/components/Administration/Accordion";

const JobsInformation: FC = (): ReactElement => {
  return (
    <div className="">
      <Accordion title="Cekkk Informasi" idAccordion="jobinformation">
        <div className="">tessss</div>
      </Accordion>
      <Accordion title="Privat" idAccordion="privat">
        <div className="">tessss</div>
      </Accordion>
    </div>
  );
};

export default JobsInformation;
