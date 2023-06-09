import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";
import Button from "@/components/Common/Button";
import simulasiNull from "@/assets/drillSimulation/simualasi-null.svg";
import drillDummy from "@/assets/drillSimulation/dummy-drill.svg";
import Image from "next/image";
import Link from "next/link";
import { useGetAllSimulation } from "./hooks";
// import { useRecoilValue } from "recoil";
// import { filterScheduleSimulation } from "./store";

const SimulationSubmission: FC = (): ReactElement => {
  // const getScheduleSimulation = useRecoilValue(filterScheduleSimulation);
  const { data } = useGetAllSimulation();
  const getSchedule = data?.data;
  console.log("cek", getSchedule);

  return (
    <>
      {getSchedule?.length === 0 ? (
        <div className="flex flex-col align-center items-center">
          <Image src={simulasiNull} alt="simulasi-null" />
          <h1 className="text-black">Belum ada simulasi yang tersedia.</h1>
        </div>
      ) : (
        <div className="flex flex-wrap mb-20 lg:justify-start md:justify-around justify-center md:gap-10 lg:gap-20 gap-5">
          {getSchedule?.map((items, i) => (
            <Card
              key={i}
              hasImage
              src={drillDummy}
              className="px-0 py-0 dark:bg-[#1B1E21] border-[#E5E5E5] border dark:border-[#1B1E21] rounded-lg cursor-default"
              imgStyle="rounded-tl-[7px] rounded-tr-[7px] relative z-10 "
            >
              <div className="mb-10 px-5 w-full relative">
                <div
                  className={`text-black text-[12px] font-[500] rounded-[7px] inline-block px-3 absolute z-20 sm:-top-[170px] -top-[160px] md:-top-[180px] right-6 justify-end ${
                    items.meeting_type === "SIMULATION"
                      ? "bg-primary-500 text-white "
                      : items.meeting_type === "DRILL"
                      ? "bg-secondary-yellow-600 text-white "
                      : items.meeting_type === "ASSESSMEN"
                      ? "bg-white"
                      : ""
                  }`}
                >
                  {items.meeting_type === "SIMULATION"
                    ? "Simulasi"
                    : items.meeting_type === "DRILL"
                    ? "Drill"
                    : items.meeting_type === "ASSESSMEN"
                    ? "Assessmen"
                    : ""}
                </div>
                <div className="flex font-[500] text-[12px] text-[#404040] rounded-[7px] gap-4 mt-5">
                  <div className=" bg-[#E9F6FD] px-3 py-1 rounded-[9px] dark:bg-[#222529] dark:text-white">
                    {items.assessor_name}
                  </div>
                  {items.schedules.length === 0 ? (
                    ""
                  ) : (
                    <div className="bg-[#E3FBDA] px-3 py-1 rounded-[9px]">
                      {items.schedules.length} Jadwal Tersedia
                    </div>
                  )}
                </div>
                <div className="text-[16px] font-[600] text-[#262626] mt-3 ml-1 dark:text-white">
                  {items.topic}
                </div>
                <div className="flex mt-4 justify-end">
                  <Link
                    href={`${
                      items.schedules.length !== 0 ? `/perubahan-jadwal/${items.topic}` : ""
                    } `}
                  >
                    <Button
                      disabled={items.schedules.length === 0 ? true : false}
                      type="submit"
                      text={
                        items.schedules.length === 0
                          ? "Tidak Ada Jadwal Tersedia"
                          : "Lihat Jadwal Simulasi"
                      }
                      className="bg-[#3EB449] dark:bg-[#17A2B8] font-[600] text-[12px] rounded-[8px] text-white w-[182px] h-[35px] dark:disabled:bg-neutral-700 disabled:bg-[#D4D4D4] disabled:text-[#A3A3A3]  disabled:cursor-not-allowed"
                    />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default SimulationSubmission;
