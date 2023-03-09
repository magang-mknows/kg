import Footbar from "@/components/Footbar";
import Navbar from "@/components/Navbar";
import { ShowDetailStatus } from "@/stores/Score";
import { scoreBreadCumbs } from "@/utilities/constant";
import { Tab } from "@headlessui/react";
import { FC, Fragment, lazy, ReactElement, Suspense } from "react";
import { useSetRecoilState } from "recoil";
import ScoreSection from "./ScoreSection";
import CertificateSection from "./CertificateSection";
import Loading from "@/components/Loading";

const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const Score: FC = (): ReactElement => {
  const setDetailStatus = useSetRecoilState(ShowDetailStatus);

  return (
    <>
      <Navbar />
      <section className="py-1 bg-[#FAFAFA]">
        <Suspense fallback={<Loading />}>
          <BreadCrumbs items={scoreBreadCumbs} />
        </Suspense>
        <main className="lg:px-20 px-10 min-h-[80vh] py-4 ">
          <Tab.Group>
            <Tab.List
              as={"div"}
              className="flex gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400"
            >
              <Tab
                as={"div"}
                onClick={() => {
                  setDetailStatus(false);
                }}
              >
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={`${
                      selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                    } py-2 px-4 cursor-pointer`}
                  >
                    Nilai
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
                    Sertifikat
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ScoreSection />
              </Tab.Panel>
              <Tab.Panel>
                <CertificateSection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </main>
      </section>
      <Footbar />
    </>
  );
};

export default Score;
