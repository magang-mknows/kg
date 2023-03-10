import Card from "@/components/Common/Card";
import ImageEventList from "@/assets/event-list.svg";
import { FC, Fragment, ReactElement } from "react";
import Link from "next/link";
import { CardListProps } from "@/pages/event/types";

const CardList: FC<CardListProps> = ({ title, slug, image, price, day, date }): ReactElement => {
  return (
    <Card
      className="bg-white rounded-lg w-[445px] h-[382px] "
      title={title}
      titleStyle="text-[16px]"
      src={image}
      href={"/event/" + slug}
      hasImage={true}
      imgwidth={10}
      imgheight={10}
    >
      <div className="flex flex-col ">
        <h1 className="text-[18px] text-[#ED3768]">{price}</h1>
        <p className="text-[14px] text-[#A3A3A3]">
          <>
            {day}, {date}
          </>
        </p>
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

const Pagination: FC = (): ReactElement => {
  return (
    <div className="flex justify-end p-4">
      <ul className="flex ">
        <li>
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent text-[#737373] "
            href={""}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center relative rounded-lg w-[36px] h-[36px] bg-[#106FA4] py-1.5 px-3 text-sm font-medium text-white"
            href={""}
          >
            1
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] "
            href={""}
          >
            2
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] "
            href={""}
          >
            3
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] "
            href={""}
          >
            4
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] "
            href={""}
          >
            5
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] "
            href={""}
          >
            6
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent text-[#737373] "
            href={""}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const EventList: FC = (): ReactElement => {
  const data = [
    {
      src: ImageEventList,
      title: "Webinar Cyber Security",
      price: 0,
      day: "Monday",
      date: "28 February 2023",
      slug: "/webinar-cyber-security",
    },
    {
      src: ImageEventList,
      title: "Pembiayaan dan Optimalisasi Bisnis",
      price: 0,
      day: "Tuesday",
      date: "28 February 2023",
      slug: "/pembiayaan-optimasi-bisnis",
    },
    {
      src: ImageEventList,
      title: "Japanese Culture",
      price: 0,
      day: "Wednesday",
      date: "28 February 2023",
      slug: "/japanese-culture",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      price: 0,
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      price: 0,
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      price: 0,
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
  ];
  return (
    <Fragment>
      <div className="flex flex-row p-10 bg-[#FAFAFA] ">
        <div className="basis-1/3">
          <SideBar />
        </div>
        <div className="w-full basis-2/3">
          <SearchBar />
          <div className="grid w-full grid-flow-row gap-16 lg:grid-cols-2">
            {data
              .map((item, index) => (
                <CardList
                  key={index}
                  slug={item.slug}
                  title={item.title}
                  image={item.src}
                  price={item.price}
                  day={item.day}
                  date={item.date}
                />
              ))
              .slice(0, 4)}
          </div>
          <Pagination />
        </div>
      </div>
    </Fragment>
  );
};

export default EventList;
