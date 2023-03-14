import { FC, Fragment, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ImageEventList from "@/assets/event-list.svg";

import Pagination from "@/modules/Event/Common/Pagination";
import SearchBar from "@/modules/Event/Common/SearchBar";
import SideBar from "@/modules/Event/Common/SideBar";
import { CardListProps } from "@/modules/Event/types";

const CardList: FC<CardListProps> = ({ title, slug, image, price, status }): ReactElement => {
  return (
    <div className={"flex auto bg-white rounded-lg w-full h-fit flex-row gap-10 items-center"}>
      <Image
        className={"w-5/12 rounded-lg"}
        src={image as StaticImageData}
        alt="Picture of the author"
      />
      <div className="flex flex-row w-full">
        <div className="flex-col w-1/2 gap-4">
          <h1 className="text-[16px] dark:text-black">{title}</h1>
          {price && (
            <h1 className="text-[18px] text-[#ED3768]">
              {price && price} {status && status}
            </h1>
          )}
          {status && <h1 className="text-[18px] text-[#3EB449]">{status && status}</h1>}
        </div>
        <Link href={"/download" + slug} className="flex gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.35 6.54C18.67 3.09 15.64 0.5 12 0.5C9.11 0.5 6.6 2.14 5.35 4.54C2.34 4.86 0 7.41 0 10.5C0 13.81 2.69 16.5 6 16.5H19C21.76 16.5 24 14.26 24 11.5C24 8.86 21.95 6.72 19.35 6.54ZM17 9.5L12 14.5L7 9.5H10V5.5H14V9.5H17Z"
              fill="#106FA4"
            />
          </svg>
          <h1 className="text-[16px] text-[#106FA4] ">Unduh Sertifikat</h1>
        </Link>
      </div>
    </div>
  );
};

const EventHistory: FC = (): ReactElement => {
  const data = [
    {
      src: ImageEventList,
      title: "Webinar Cyber Security",
      status: "Terdaftar",
      day: "Monday",
      date: "28 February 2023",
      slug: "/webinar-cyber-security",
    },
    {
      src: ImageEventList,
      title: "Pembiayaan dan Optimalisasi Bisnis",
      status: "Terdaftar",
      day: "Tuesday",
      date: "28 February 2023",
      slug: "/pembiayaan-optimasi-bisnis",
    },
    {
      src: ImageEventList,
      title: "Japanese Culture",
      status: "Terdaftar",
      day: "Wednesday",
      date: "28 February 2023",
      slug: "/japanese-culture",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      status: "Terdaftar",
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
  ];
  return (
    <Fragment>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <SideBar active="EventHistory" />
        </div>
        <div className="w-full basis-2/3">
          <SearchBar />
          <div className="grid w-full grid-flow-row gap-8 ">
            {data
              .map((item, index) => (
                <CardList
                  key={index}
                  slug={item.slug}
                  title={item.title}
                  image={item.src}
                  status={item.status}
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

export default EventHistory;
