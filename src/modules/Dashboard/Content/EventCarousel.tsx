import { FC, ReactElement } from "react";

import penugasan from "@/assets/dashboard/penugasan.svg";
import acara from "@/assets/dashboard/acara.svg";
import Image from "next/image";

import { useSelectedTask } from "@/hooks/Dashboard/useSelectedEvent";

import { MdNavigateNext } from "react-icons/md";
import Button from "@/components/Common/Button";

const EventCarousel: FC = (): ReactElement => {
  const { setSelectedEvent, getSelectedEvent } = useSelectedTask();

  const dummyEvent = [
    {
      id: 1,
      image: acara,
      topic: "Webinar Cyber Security",
      date: "27 Feb",
      time: "09.00 - 11.00 WIB",
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
    {
      id: 2,
      image: penugasan,
      topic: "Webinar Cyber Crime",
      date: "27 Feb",
      time: "09.00 - 11.00 WIB",
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
    {
      id: 3,
      image: penugasan,
      topic: "Webinar Mikrotik",
      date: "27 Feb",
      time: "09.00 - 11.00 WIB",
      totalSpeakers: 1,
      audience: 72,
      quota: 100,
    },
  ];
  return (
    <div className="bg-white p-7 rounded-md shadow-sm">
      <section className="relative">
        <section className="flex gap-1 absolute top-3 right-0">
          {dummyEvent.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  getSelectedEvent == item.id ? "w-6 bg-primary-500 " : "w-2 bg-neutral-300"
                } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedEvent(item.id);
                }}
              ></span>
            );
          })}
        </section>
      </section>
      {dummyEvent.map((item, index) => {
        return (
          <div key={index} className={`${item.id === getSelectedEvent ? "block" : "hidden"}`}>
            <section className="text-neutral-900 mb-4">
              <h1 className="text-lg font-bold">Acara Kampus</h1>
              <p className="text-sm text-neutral-500 ">{dummyEvent.length} Acara kampus tersedia</p>
            </section>
            <section className="flex gap-4 mb-4 h-40 xl:h-auto">
              <Image src={item.image} alt="test" className="h-[100px]" />
              <div>
                <h1 className="mb-2">{item.topic}</h1>
                <section className="flex gap-2 xl:gap-4  flex-wrap xl:flex-nowrap">
                  <div className="flex flex-col ">
                    <section className="flex gap-2 items-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                        <MdNavigateNext className="text-yellow-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">{item.date}</p>
                    </section>
                    <section className="flex gap-2 items-center">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                        <MdNavigateNext className="text-yellow-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">
                        {item.totalSpeakers} Pemateri
                      </p>
                    </section>
                  </div>
                  <div className="flex flex-col ">
                    <section className="flex gap-2 items-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                        <MdNavigateNext className="text-yellow-500" />
                      </div>
                      <p className="text-xs lg:text-xs  text-neutral-400">{item.time}</p>
                    </section>
                    <section className="flex gap-2 items-center">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                        <MdNavigateNext className="text-yellow-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">
                        {item.audience} / {item.quota} Peserta
                      </p>
                    </section>
                  </div>
                </section>
              </div>
            </section>
            <section className="flex justify-between items-center">
              <Button
                type="button"
                text={"Daftar Sekarang"}
                className="text-white w-full xl:w-auto bg-yellow-500 text-sm py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors ease-in-out duration-300"
              />
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default EventCarousel;
