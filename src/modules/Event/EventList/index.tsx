import { FC, Fragment, ReactElement } from "react";
import CardList from "@/modules/Event/Common/CardList";
import Pagination from "@/modules/Event/Common/Pagination";
import SearchBar from "@/modules/Event/Common/SearchBar";
import SideBar from "@/modules/Event/Common/SideBar";

import ImageEventList from "@/assets/event/event-list.svg";

const EventList: FC = (): ReactElement => {
  const data = [
    {
      src: ImageEventList,
      title: "Webinar Cyber Security",
      price: "Gratis",
      day: "Monday",
      date: "28 February 2023",
      slug: "/webinar-cyber-security",
    },
    {
      src: ImageEventList,
      title: "Pembiayaan dan Optimalisasi Bisnis",
      price: "Gratis",
      day: "Tuesday",
      date: "28 February 2023",
      slug: "/pembiayaan-optimasi-bisnis",
    },
    {
      src: ImageEventList,
      title: "Japanese Culture",
      price: "Gratis",
      day: "Wednesday",
      date: "28 February 2023",
      slug: "/japanese-culture",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      price: "Gratis",
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      price: "Gratis",
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
    {
      src: ImageEventList,
      title: "Design Digitals",
      price: "Gratis",
      day: "Thursday",
      date: "28 February 2023",
      slug: "/design-digital",
    },
  ];
  return (
    <Fragment>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <SideBar active="EventList" />
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
