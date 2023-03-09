import Card from "@/components/Common/Card";
import ImageEventList from "@/assets/event-list.svg";
import { FC, Fragment, ReactElement } from "react";

const CardList: FC = (): ReactElement => {
  return (
    <Card
      className="bg-white rounded-lg w-[445px] h-[382px] "
      title="Webinar Cyber Security"
      titleStyle="text-[16px]"
      src={ImageEventList}
      hasImage={true}
      imgwidth={10}
      imgheight={10}
    >
      <div className="flex flex-col ">
        <h1 className="text-[18px] text-[#ED3768]">GRATIS</h1>
        <p className="text-[14px] text-[#A3A3A3]">Tuesday, 28 February 2023 19:00 WIB</p>
      </div>
    </Card>
  );
};

const SearchBar: FC = (): ReactElement => {
  return (
    <div className=" flex justify-center w-full rounded-[8px] mb-4 text-[#A3A3A3] bg-[#F5F5F5] ">
      <button
        className="flex items-center rounded-l px-6 py-2.5 leading-tight"
        type="button"
        id="button-addon1"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <input
        type="search"
        className="flex-auto rounded-r px-3 py-1.5 bg-transparent text-[16px] font-[500]"
        placeholder="Cari mata kuliah"
        aria-label="Cari mata kuliah"
      />
    </div>
  );
};

const SideBar: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-[36px] w-[339px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[28px] font-[600]">Acara Kampus</h1>
        <p className="text-[18px] font-[400]">
          Pilih dan ikuti beragam webinar seru dan menarik dari Kampus Gratis
        </p>
      </div>
      <div className="flex items-center justify-center flex-col rounded-[8px] gap-[8px] w-[339px] h-[188px] py-[20px] px-[16px] text-[#737373] text-[14px] font-[600] ">
        <div className="flex items-center px-[12px] rounded-[8px] w-full h-full bg-[#E9F6FD]">
          Daftar Event
        </div>
        <div className="flex items-center px-[12px] rounded-[8px] w-full h-full ">
          Event Terdaftar
        </div>
        <div className="flex items-center px-[12px] rounded-[8px] w-full h-full ">
          Riwayat Event
        </div>
      </div>
    </div>
  );
};

const EventList: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="flex flex-row p-10 bg-[#FAFAFA] ">
        <div className="basis-1/3">
          <SideBar />
        </div>
        <div className="w-full basis-2/3">
          <SearchBar />
          {/* <div className="flex flex-wrap justify-between w-full grid-flow-row grid-cols-2 gap-16"> */}
          <div className="grid w-full grid-flow-row gap-16 lg:grid-cols-2">
            <CardList />
            <CardList />
            <CardList />
            <CardList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventList;
