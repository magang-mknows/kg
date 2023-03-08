import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { drillSimulation } from "@/utilities/constant";
import MainLayouts from "@/layouts/Main";
import { Tab } from "@headlessui/react";
import SimulationSubmission from "./SimulationSubmission";

const Title = lazy(() => import("@/modules/DrillSimulasion/Title"));
const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const DrillSimulasion: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <BreadCrumbs items={drillSimulation} />
        <MainLayouts>
          <Title />
          <Tab.Group>
            <Tab.List
              as={"div"}
              className=" mb-10 border-b-2 flex gap-6 px-2 text-lg text-neutral-400 font-medium"
            >
              <Tab>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
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
                  /* Use the `selected` state to conditionally style the selected tab. */
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
              {/* riwayat simulasi */}
              <Tab.Panel>Riwayat Simulasi</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </MainLayouts>
      </Suspense>
    </BaseLayouts>
  );
};

export default DrillSimulasion;
