import { FC, ReactElement } from "react";

import penugasan from "@/assets/penugasan.svg";
import acara from "@/assets/acara.svg";
import Image from "next/image";

import { useSelectedTask } from "@/hooks/Dashboard/useSelectedTask";

import { MdNavigateNext } from "react-icons/md";
import Button from "@/components/Common/Button";
import { AiFillWarning } from "react-icons/ai";

const TaskCarousel: FC = (): ReactElement => {
  const { setSelectedTask, getSelectedTask } = useSelectedTask();

  const dummyPenugasan = [
    {
      id: 1,
      image: penugasan,
      topic: "Japanese Culture",
      title: "Introduction to Japanese Culture",
      milstone: "Tugas Pertemuan 1",
      teacher: "Bagas Saputra, M. Kom.",
      dueDate: "Terakhir 28 Februari 2023",
    },
    {
      id: 2,
      image: acara,
      topic: "Indonesia Culture",
      title: "Introduction to Indonesia Culture",
      milstone: "Tugas Pertemuan 2",
      teacher: "Bagas Saputra, M. Kom.",
      dueDate: "Terakhir 28 April 2023",
    },
    {
      id: 3,
      image: penugasan,
      topic: "Bekasi Culture",
      title: "Introduction to Bekasi Culture",
      milstone: "Tugas Pertemuan 1",
      teacher: "Bagas Saputra, M. Kom.",
      dueDate: "Terakhir 28 Maret 2023",
    },
  ];
  return (
    <div className="bg-white p-7 rounded-md shadow-sm">
      <section className="relative">
        <section className="flex gap-1 absolute top-3 right-0">
          {dummyPenugasan.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  getSelectedTask == item.id ? "w-6 bg-primary-500 " : "w-2 bg-neutral-300"
                } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedTask(item.id);
                }}
              ></span>
            );
          })}
        </section>
      </section>
      {dummyPenugasan.map((item, index) => {
        return (
          <div key={index} className={`${item.id === getSelectedTask ? "block" : "hidden"}`}>
            <section className="text-neutral-900 mb-4">
              <h1 className="text-lg font-bold">Penugasan</h1>
              <p className="text-sm text-neutral-500 ">{item.topic}</p>
            </section>
            <section className="flex gap-4 mb-4">
              <Image src={item.image} alt="test" className="h-[100px]" />
              <div>
                <h1 className="mb-2">{item.title}</h1>
                <section className="flex gap-2 items-start lg:items-center mb-2">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                    <MdNavigateNext className="text-primary-500" />
                  </div>
                  <p className="text-xs lg:text-sm text-neutral-400">{item.milstone}</p>
                </section>
                <section className="flex gap-2 items-start lg:items-centers">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                    <MdNavigateNext className="text-primary-500" />
                  </div>
                  <p className="text-xs lg:text-sm   text-neutral-400">{item.teacher}</p>
                </section>
              </div>
            </section>
            <section className="flex justify-between flex-wrap items-center">
              <Button
                type="button"
                text={"Kerjakan Sekarang"}
                className="text-white w-full lg:w-auto mb-2 lg:mb-0 bg-primary-500 text-sm py-2 px-4 rounded-md hover:bg-primary-600 transition-colors ease-in-out duration-300"
              />
              <div className="text-red-500 flex items-center gap-2 text-xs lg:text-sm">
                <AiFillWarning />
                <h1>{item.dueDate}</h1>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCarousel;
