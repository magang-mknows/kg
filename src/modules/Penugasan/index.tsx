import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

// const HeroSection = lazy(() => import("@/modules/Landing/HeroSection"));
// const AboutSection = lazy(() => import("@/modules/Landing/AboutSection"));

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
          <div className="   bg-white  h-[212px] rounded-[8px]">
            <h1 className=" text-white pt-[61px] font-bold text-[28px] text-center ">Penugasan</h1>
            <p className=" text-white pt-[28px] font-semibold text-center">
              Selesaikan tugasmu tepat waktu dan dapatkan sertifikasinya!{" "}
            </p>
          </div>
        </section>
      </Suspense>
    </BaseLayouts>
  );
};

export default Penugasan;
