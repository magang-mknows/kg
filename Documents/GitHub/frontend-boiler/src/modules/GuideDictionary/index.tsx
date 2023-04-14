import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideDictionary } from "@/utilities/constant";
import React, { ReactElement } from "react";
import ContentSection from "./content";
import Sidebar from "./sidebar";

const GuideDictionaryModule = (): ReactElement => {
  return (
    <BaseLayoutsLanding>
      <BreadCrumb items={guideDictionary} />
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <Sidebar />
        <ContentSection />
      </div>
    </BaseLayoutsLanding>
  );
};

export default GuideDictionaryModule;
