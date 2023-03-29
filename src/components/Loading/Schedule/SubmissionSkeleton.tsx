import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";

const SubmissionSkeleton: FC = (): ReactElement => {
  return (
    <div className="">
      {/* <div className="flex flex-wrap mb-20 lg:justify-start md:justify-around justify-center md:gap-10 lg:gap-20 gap-5">
        <Card
          key={i}
          hasImage
          src={items.src}
          className="px-0 py-0 dark:bg-[#1B1E21] border-[#E5E5E5] border dark:border-[#1B1E21] rounded-lg cursor-default"
          imgStyle="rounded-tl-[7px] rounded-tr-[7px] relative z-10 "
        >
          <div className="mb-10 px-5 w-full ">
            <div
              className={`text-black text-[12px] font-[500] rounded-[7px] inline-block px-3 relative z-20 -top-48 justify-end  ${
                items.category === "Simulasi"
                  ? "bg-primary-500 text-white -right-64 ml-5"
                  : items.category === "Drill"
                  ? "bg-secondary-yellow-600 text-white -right-72 ml-3"
                  : items.category === "Assessmen"
                  ? "bg-white  -right-64 ml-1"
                  : ""
              }`}
            >
              {items.category === "Simulasi"
                ? "Simulasi"
                : items.category === "Drill"
                ? "Drill"
                : items.category === "Assessmen"
                ? "Assessmen"
                : ""}
            </div>
            <div className="flex font-[500] text-[12px] text-[#404040] rounded-[7px] gap-4">
              <div className=" bg-[#E9F6FD] px-3 py-1 rounded-[9px] dark:bg-[#222529] dark:text-white">
                {items.dosen}
              </div>
              {items.schedule === 0 ? (
                ""
              ) : (
                <div className="bg-[#E3FBDA] px-3 py-1 rounded-[9px]">
                  {items.schedule} Jadwal Tersedia
                </div>
              )}
            </div>
            <div className="text-[16px] font-[600] text-[#262626] mt-3 ml-1 dark:text-white">
              {items.title}
            </div>
            <div className="flex mt-4 justify-end">
              <Link href={`${items.schedule !== 0 ? `/perubahan-jadwal/${items.title}` : ""} `}>
                <Button
                  disabled={items.schedule === 0 ? true : false}
                  type="submit"
                  text={
                    items.schedule === 0 ? "Tidak Ada Jadwal Tersedia" : "Lihat Jadwal Simulasi"
                  }
                  className="bg-[#3EB449] dark:bg-[#17A2B8] font-[600] text-[12px] rounded-[8px] text-white w-[182px] h-[35px] dark:disabled:bg-neutral-700 disabled:bg-[#D4D4D4] disabled:text-[#A3A3A3]  disabled:cursor-not-allowed"
                />
              </Link>
            </div>
          </div>
        </Card>
      </div> */}
    </div>
  );
};

export default SubmissionSkeleton;
