import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { drillSimulation } from "@/utilities/constant";
import { Tab } from "@headlessui/react";
import SimulationSubmission from "./SimulationSubmission";
import SimulationHistory from "./SimulationHistory";
import SuspenseError from "../Common/SuspenseError";
import TitleSkeleton from "@/components/Loading/Simulasion/TitleSkeleton";

const Title = lazy(() => import("@/modules/DrillSimulasion/Title"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DrillSimulasion: FC = (): ReactElement => {
  return (
    // <BaseLayouts>
    <>
      {/* <BreadCrumbs items={drillSimulation} /> */}
      <div className="px-6 md:px-8 lg:px-10 w-full">
        <SuspenseError loadingFallback={<TitleSkeleton />}>
          <Title />
        </SuspenseError>
        <Tab.Group>
          <Tab.List
            as={"div"}
            className=" mb-10 border-b-2 flex gap-6 px-2 text-lg text-neutral-400 font-medium"
          >
            <Tab>
              {({ selected }) => (
                <div
                  className={`${
                    selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer`}
                >
                  Pengajuan Simulasi
                </div>
              )}
            </Tab>
            <Tab as={"div"}>
              {({ selected }) => (
                <div
                  className={`${
                    selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer`}
                >
                  Riwayat Simulasi
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <SimulationSubmission />
            </Tab.Panel>
            <Tab.Panel>
              <SimulationHistory />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
    /* </BaseLayouts> */
  );
};

export default DrillSimulasion;
