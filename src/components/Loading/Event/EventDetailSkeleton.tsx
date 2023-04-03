import { FC, ReactElement } from "react";
import BreadcrumbAssignment from "@/components/Loading/Assigment/Breadcrumb";

const EventDetailSkeleton: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <BreadcrumbAssignment />
      <div className="w-full px-10 py-10 animate-pulse lg:px-20">
        {/* card */}
        <section className="block h-2/3 lg:flex gap-36">
          <div className="image w-full lg:w-[720px] animate-pulse bg-gray-300 h-[400px] rounded-lg"></div>
          <div className="flex flex-col justify-between ">
            <h1 className="py-1 mb-4 text-lg font-bold text-transparent bg-gray-200 rounded-md w-fit">
              Webinar Cyber Security
            </h1>
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="mb-1 text-lg text-transparent bg-gray-200 rounded-md w-fit">
                Benefit
              </h1>
              <div className="mb-1 text-sm text-transparent bg-gray-200 rounded-md w-fit ">
                <p>Sertifikat</p>
              </div>
              <div className="mb-1 text-sm text-transparent bg-gray-200 rounded-md w-fit ">
                <p>Pemahaman tentang Cyber Security</p>
              </div>
              <div className="mb-1 text-sm text-transparent bg-gray-200 rounded-md w-fit ">
                <p>Ilmu langsung dari seorang Cyber Security</p>
              </div>
            </div>
            <div></div>
            <h1 className="mb-4 text-lg font-bold text-transparent bg-gray-200 rounded-md w-fit ">
              GRATIS
            </h1>
            <p className="py-1 mb-1 text-sm text-transparent bg-gray-200 rounded-md w-fit">
              Tuesday, 28 February 2023 19:00 WIB
            </p>
            <div className="py-3 text-lg text-gray-200 bg-gray-200 rounded-lg px-28">
              Daftar Sekarang
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventDetailSkeleton;
