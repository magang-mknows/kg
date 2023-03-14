import Link from "next/link";
import { FC, ReactElement } from "react";

const SideBar: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-[36px] w-[339px] ">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[28px] font-[600]">Acara Kampus</h1>
        <p className="text-[18px] font-[400]">
          Pilih dan ikuti beragam webinar seru dan menarik dari Kampus Gratis
        </p>
      </div>
      <div className="flex items-center justify-center flex-col rounded-[8px] gap-[8px] w-[339px] h-[188px] py-[20px] px-[16px] bg-white text-[#737373] text-[14px] font-[600] ">
        <div className="flex items-center px-[12px] rounded-[8px] w-full h-full bg-[#E9F6FD]">
          <Link href={"/event/event-list"}>Daftar Event</Link>
        </div>
        <div className="flex items-center px-[12px] rounded-[8px] w-full h-full ">
          <Link href={"/event/event-registered"}>Event Terdaftar</Link>
        </div>
        <div className="flex items-center px-[12px] rounded-[8px] w-full h-full ">
          <Link href={"/event/event-history"}>Riwayat Event</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
