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
      <BaseLayoutsLanding>
        <Suspense fallback={<Loading />}>
          <BreadCrumb items={guideDictionary} />
          <div className="flex flex-col-reverse lg:flex-row">
            <Sidebar />
            <ContentSection />
          </div>
        </Suspense>
      </BaseLayoutsLanding>
    </div>
  );
};

export default GuideDictionaryModule;
