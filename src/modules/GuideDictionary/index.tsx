import BreadCrumb from "@/components/Assigment/BreadCrumb";
import Loading from "@/components/Loading";
import BaseLayoutsLanding from "@/layouts/BaseLanding";
import { guideDictionary } from "@/utilities/constant";
import React, { ReactElement, Suspense } from "react";
import ContentSection from "./content";
import Sidebar from "./sidebar";

const GuideDictionaryModule = (): ReactElement => {
  return (
    <div>
      <BaseLayoutsLanding className="flex flex-row">
        <Suspense fallback={<Loading />}>
          <BreadCrumb items={guideDictionary} />
          <Sidebar />
          <ContentSection />
        </Suspense>
      </BaseLayoutsLanding>
    </div>
  );
};

export default GuideDictionaryModule;
