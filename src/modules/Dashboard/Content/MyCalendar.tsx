import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FC, ReactElement } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const MyCalendar: FC = (): ReactElement => {
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const numDaysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({ length: numDaysInMonth }, (_, i) => {
    const date = new Date(year, month - 1, i + 1);
    return { date };
  });

  return (
    <div
      className={`${montserrat.className} w-[100%] text-neutral-900 bg-white h-fit px-7 py-12 rounded-md`}
    >
      <header className="flex justify-between  items-center">
        <h1 className="text-lg font-bold">Kalender Saya</h1>
        <Link
          passHref
          href={"/"}
          className="text-blue-500 text-sm font-bold hover:underline hover:underline-offset-2 hover:text-blue-600 transition-colors ease-in-out duration-300"
        >
          Lihat Detail
        </Link>
      </header>
      <p className="mb-4 font-bold text-base text-yellow-600">{months[month - 1]}</p>
      <section className="mb-4 gap-2 flex w-[100%] overflow-hidden overflow-x-scroll scrollbar-hide md:scrollbar-default">
        {dates.map(({ date }, index) => {
          return (
            <section
              key={index}
              className={`${
                date.getDate() == now.getDate() ? "bg-primary-500 text-white" : ""
              } text-sm text-center cursor-pointer hover:bg-primary-500 group px-3 py-3 transition-colors ease-in-out duration-300 rounded-md`}
            >
              <p
                className={`${
                  date.getDate() === now.getDate() ? "text-white" : "text-neutral-500"
                } group-hover:text-white  text-xs`}
              >
                {days[date.getDay()].substring(0, 2)}
              </p>
              <p
                className={`${
                  date.getDate() === now.getDate() ? "text-white" : "text-neutral-500"
                } group-hover:text-white text-neutral-800 font-bold`}
              >
                {index + 1}
              </p>
            </section>
          );
        })}
      </section>
      <section className="text-sm">
        <div className="border-l-4 hover:bg-primary-500 cursor-pointer hover:border-primary-700 transition-colors ease-in-out duration-500 group py-3 hover:shadow-lg border-primary-500 px-3 rounded-md mb-4">
          <p className="mb-1 text-neutral-800 group-hover:text-white">14:30 - 15:30 pm</p>
          <p className="font-bold group-hover:text-white">Introduction to Japanese Culture</p>
          <p className="text-neutral-500 group-hover:text-white">Pertemuan 1</p>
        </div>
        <div className="border-l-4 hover:bg-yellow-500 cursor-pointer hover:border-yellow-700 transition-colors ease-in-out duration-300 group py-3 hover:shadow-lg border-yellow-500 px-3 rounded-md mb-4">
          <p className="mb-1 text-neutral-800 group-hover:text-white">14:30 - 15:30 pm</p>
          <p className="font-bold group-hover:text-white">Introduction to Japanese Culture</p>
          <p className="text-neutral-500 group-hover:text-white">Pertemuan 1</p>
        </div>
      </section>
    </div>
  );
};

export default MyCalendar;
