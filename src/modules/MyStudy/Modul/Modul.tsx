import Loading from "@/components/Loading";
import BaseLayouts from "@/layouts/Base";
import { FC, lazy, ReactElement, Suspense } from "react";
import { contentModulBreadCumbs } from "@/utilities/constant";
import MainLayouts from "@/layouts/Main";

const BreadCrumbs = lazy(() => import("@/components/Assigment/BreadCrumb"));

const index: FC = (): ReactElement => {
  return (
    <BaseLayouts widthHScreen={false}>
      <Suspense fallback={<Loading />}>
        <MainLayouts withPadding={false}>
          <div className="px-10">
            <BreadCrumbs items={contentModulBreadCumbs} />
          </div>
          <div className="flex flex-col h-full w-screen justify-screen items-center px-32 ">
            <h1 className="text-3xl font-bold py-4">Mata Kuliah 1</h1>
            <div className="flex w-full h-full gap-8">
              <div className="w-[65%]">
                <div className="flex w-full h-[500px] justify-center items-center bg-gray-300">
                  <h1>Content Youtube</h1>
                  <p></p>
                </div>
              </div>
              <div>
                <h1>Hallo</h1>
              </div>
            </div>
          </div>
        </MainLayouts>
      </Suspense>
    </BaseLayouts>
  );
};

export default index;
