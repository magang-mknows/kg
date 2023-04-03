import { FC, ReactElement } from "react";

const EventDetailSkeleton: FC = (): ReactElement => {
  return (
    <div className="w-full px-10 py-10 animate-pulse lg:px-20">
      {/* card */}
      <section className="block h-2/3 lg:flex gap-36">
        <div className="image w-full lg:w-[720px] animate-pulse bg-gray-300 h-[400px] rounded-lg"></div>
        <div className="flex flex-col justify-between py-4">
          <h1 className="text-lg font-bold mb-7 text-neutral-900">Webinar Cyber Security</h1>
          <div className="mb-7">
            <h1 className="mb-2 text-lg text-neutral-600">Benefit</h1>
            <div className="flex gap-x-1.5 items-center mb-1 text-sm text-neutral-800">
              <p>item</p>
            </div>
          </div>
          <div></div>
          <h1 className="text-lg font-bold text-red-500 mb-7">GRATIS</h1>
          <p className="text-sm bg-gray-200 text-neutral-600 mb-7"></p>
          <div className="py-3 text-lg text-gray-200 bg-gray-200 rounded-lg px-28">
            Daftar Sekarang
          </div>
        </div>
      </section>

      {/* tab */}
      {/* <main className=" min-h-[80vh] py-4 ">
        <Tab.Group>
          <Tab.List
            as={"div"}
            className="flex gap-2 mb-5 text-sm font-medium border-b-2 text-neutral-400"
          >
            <Tab as={Fragment}>
              {({ selected }) => (
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
      </main> */}
      {/* <PopupModal
        icon={checklist}
        lookup={getPopupStatus}
        image={eventSuccess}
        popupTitle={"Kamu Berhasil Mendaftar"}
        description={
          "Kamu telah mendaftar webinar di hari Selasa, 28 Februari 2023 Pukul 19:00 WIB"
        }
        className={""}
      >
        <div className="flex items-center gap-2 py-2 mt-4 mb-5 text-base rounded-md shadow-sm bg-primary-100 px-7">
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
        <div className="flex items-center justify-center w-full gap-10">
          <div className="py-3 font-bold transition-colors duration-300 ease-in-out bg-white border-2 rounded-md hover:bg-neutral-100 w-72 text-primary-500 border-primary-500"></div>

          <div className="py-3 font-bold text-white transition-colors duration-300 ease-in-out border-2 rounded-md hover:bg-primary-600 w-72 bg-primary-500 border-primary-500"></div>
        </div>
      </PopupModal> */}
    </div>
  );
};

export default EventDetailSkeleton;
