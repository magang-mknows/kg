import ImageEventList from "@/assets/event-list.svg";
import Button from "@/components/Common/Button";
import PopupModal from "@/components/Common/PopupModal";
import { usePopupEvent } from "@/hooks/Common/usePopupEvent";
import { Tab } from "@headlessui/react";

import eventSuccess from "@/assets/eventSuccess.svg";
import checklist from "@/assets/checklist.svg";

import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import Contact from "./Contact";
import Description from "./Description";
import Information from "./Information";
import Link from "next/link";

const dummyBenefits = [
  "Sertifikat",
  "Pemahaman tentang Cyber Security",
  "Ilmu langsung dari seorang Cyber Security",
];

const EventDetail: FC = (): ReactElement => {
  const { getPopupStatus, setPopupStatus } = usePopupEvent();

  return (
    <div className="px-10 lg:px-20 py-10 bg-neutral-50">
      {/* card */}
      <section className="lg:flex block gap-36 mb-10">
        <Image src={ImageEventList} alt="event-card" width={100} className="w-full lg:w-[720px]" />
        <div className="py-4">
          <h1 className="text-lg font-bold mb-7 text-neutral-900">Webinar Cyber Security</h1>
          <div className="mb-7">
            <h1 className="text-lg text-neutral-600 mb-2">Benefit</h1>
            {dummyBenefits.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-x-1.5 items-center mb-1 text-sm text-neutral-800"
                >
                  <BsCheckCircleFill className="text-green-500" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <h1 className="text-red-500 font-bold text-lg mb-7">GRATIS</h1>
          <p className="text-sm text-neutral-600 mb-7">Tuesday, 28 February 2023 19:00 WIB</p>
          <Button
            onClick={() => setPopupStatus(true)}
            text={"Daftar Sekarang"}
            type="submit"
            className="bg-primary-500 px-28 py-3 hover:bg-primary-600 text-white text-lg rounded-lg shadow-md transition-colors ease-out duration-300"
          />
        </div>
      </section>

      {/* tab */}
      <main className=" min-h-[80vh] py-4 ">
        <Tab.Group>
          <Tab.List
            as={"div"}
            className="flex gap-2  mb-5 text-sm font-medium border-b-2 text-neutral-400"
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={`${
                    selected ? "border-b-2 outline-none   border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer  font-bold`}
                >
                  Deskripsi
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={`${
                    selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer  font-bold`}
                >
                  Informasi
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={`${
                    selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                  } py-2 px-4 cursor-pointer  font-bold`}
                >
                  Kontak
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Description />
            </Tab.Panel>
            <Tab.Panel>
              <Information />
            </Tab.Panel>
            <Tab.Panel>
              <Contact />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      <PopupModal
        icon={checklist}
        lookup={getPopupStatus}
        image={eventSuccess}
        popupTitle={"Kamu Berhasil Mendaftar"}
        description={
          "Kamu telah mendaftar webinar di hari Selasa, 28 Februari 2023 Pukul 19:00 WIB"
        }
        className={""}
      >
        <div className="flex gap-2 mt-4 text-base mb-5 bg-primary-100 px-7 py-2 rounded-md shadow-sm items-center">
          <AiFillInfoCircle className="text-primary-500" />
          <p className="text-primary-500/60">
            Untuk informasi lebih lanjut silakan pergi ke page{" "}
            <span className="font-bold text-primary-500">
              <Link passHref href={"/event"}>
                Event Terdaftar
              </Link>
            </span>
          </p>
        </div>
        <div className="w-full flex items-center gap-10 justify-center">
          <Button
            onClick={() => {
              setPopupStatus(false);
            }}
            type="button"
            text={"Tutup"}
            className={
              "bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 py-3 w-72 text-primary-500 font-bold border-2 border-primary-500 rounded-md"
            }
          />
          <Link href={"/event"}>
            <Button
              type="button"
              text={"Event Terdaftar"}
              className={
                "text-white hover:bg-primary-600 transition-colors ease-in-out duration-300 py-3 w-72 bg-primary-500 font-bold border-2 border-primary-500 rounded-md"
              }
              onClick={() => {
                setPopupStatus(false);
              }}
            />
          </Link>
        </div>
      </PopupModal>
    </div>
  );
};

export default EventDetail;
