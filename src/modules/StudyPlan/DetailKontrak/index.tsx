import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";
import { Tab } from "@headlessui/react";
import { contractStudyBreadCumbs } from "@/utilities/constant";
import MainLayouts from "@/layouts/Main";
import Contract from "./Contract";
import Draft from "./Draft";
import PreTest from "./PreTest";
import Submission from "./Submission";

import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/StudyPlan/BreadCumb"));
const DetailContract: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={<Loading />}>
        <BreadCrumbs items={contractStudyBreadCumbs} />
        <MainLayouts className="bg-[#FAFAFA]">
          <div className="flex flex-col p-4 gap-4">
            <h1 className="text-[#737373] text-[18px] text:lg">Teknik Informatika</h1>
            <p className="text-[20px] font-semibold">Software Engineering</p>
          </div>

          <div className="p-4 mt-6">
            <Tab.Group>
              <Tab.List
                as={"div"}
                className=" mb-10 border-b-2 flex gap-6 px-2 text-lg text-neutral-400 font-medium"
              >
                <Tab>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? "border-b-2 outline-none font-semibold  border-primary-500 text-primary-500"
                          : ""
                      } py-2 px-4 cursor-pointer`}
                    >
                      Kontrak KRS
                    </div>
                  )}
                </Tab>
                <Tab as={"div"}>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? "border-b-2 outline-none font-semibold border-primary-500 text-primary-500"
                          : ""
                      } py-2 px-4 cursor-pointer`}
                    >
                      Draft KRS
                    </div>
                  )}
                </Tab>
                <Tab as={"div"}>
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? "border-b-2 outline-none font-semibold border-primary-500 text-primary-500"
                          : ""
                      } py-2 px-4 cursor-pointer`}
                    >
                      Pre - Test
                    </div>
                  )}
                </Tab>
                <Tab as={"div"}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <div
                      className={`${
                        selected
                          ? "border-b-2 outline-none font-semibold border-primary-500 text-primary-500"
                          : ""
                      } py-2 px-4 cursor-pointer`}
                    >
                      Pengajuan
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Contract />
                </Tab.Panel>
                {/* riwayat simulasi */}
                <Tab.Panel>
                  <Draft />
                </Tab.Panel>
                <Tab.Panel>
                  <PreTest />
                </Tab.Panel>
                <Tab.Panel>
                  <Submission />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </MainLayouts>
      </Suspense>
    </BaseLayouts>
  );
};

export default DetailContract;
