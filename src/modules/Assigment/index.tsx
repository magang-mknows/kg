import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const CardAssignment = lazy(() => import("@/modules/Assigment/CardAssignment"));

const Penugasan: FC = (): ReactElement => {
  return (
    <BaseLayouts>
      <Suspense fallback={"Skeleton loading...."}>
        <section className="lg:px-20 md:px-10 px-5 py-3 w-screen ">
          <div className="   bg-[#106FA4]  h-[212px] rounded-[8px]">
            <h1 className=" text-white pt-[61px] font-bold text-[28px] text-center ">Penugasan</h1>
            <p className=" text-white pt-[28px] font-semibold text-center">
              Selesaikan tugasmu tepat waktu dan dapatkan sertifikasinya!{" "}
            </p>
          </div>
        </section>
        <section className="lg:px-20 md:px-10 px-5 py-3 w-screen mt-[36px] drop-shadow-md">
          <div className="   bg-white h-full  rounded-[8px]">
            <div className="text-[20px] font-semibold text-center text-[#262626] border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-[50px]">
              <ul className="flex flex-wrap ">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 text-[#0B568D] border-b-2 border-[#0B568D] rounded-t-lg active dark:text-[#0B568D] dark:border-[#0B568D]"
                    aria-current="page"
                  >
                    Semua Tugas
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Ditugaskan
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>

            <CardAssignment />
          </div>
        </section>
      </Suspense>
    </BaseLayouts>
  );
};

export default Penugasan;
