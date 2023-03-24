import { FC, ReactElement } from "react";
import Image from "next/image";
import rescheduleSimulasi from "@/assets/rescheduleSimulasi/dummyReschedule.svg";
import iconWarning from "@/assets/rescheduleSimulasi/iconWarning.svg";
import { useRouter } from "next/router";
import { filterSlug } from "@/stores/Simulation";
import { useRecoilValue } from "recoil";

const Rules: FC = (): ReactElement => {
  const { query } = useRouter();
  const getSlug = useRecoilValue(filterSlug(query.title as unknown as string));
  return (
    <>
      {getSlug.map((x, y) => (
        <Image
          key={y}
          src={x.src}
          alt={"reshedule-image"}
          className={"object-cover w-full h-48 rounded-[10px]"}
        />
      ))}
      <div className="flex flex-row mt-3">
        <Image src={iconWarning} alt={"warning"} />

        <p className="ml-2 text-[#171717] text-[18px] font-[600] dark:text-white">
          Informasi Mengenai Drill Simulasi & Assessment
        </p>
      </div>
      <p className="mt-3 text-[#171717] dark:text-white text-[14px] font-[400] text-justify">
        <ol>
          <li>
            1. Peserta harus memastikan bahwa perangkat dan teknologi yang digunakan untuk drill
            simulasi & assessment berfungsi dengan baik. Pastikan bahwa peserta memiliki akses yang
            cukup dan perangkat yang dapat mendukung drill simulasi & assessment pada LMS.
          </li>
          <li>
            2. Sebelum memulai drill simulasi & assessment pada LMS, pastikan bahwa peserta telah
            diberikan instruksi yang jelas dan sasaran yang harus dicapai. Sasaran harus sesuai
            dengan kemampuan dan kebutuhan dari setiap individu yang terlibat dalam drill tersebut.
          </li>
        </ol>
      </p>
    </>
  );
};

export default Rules;
