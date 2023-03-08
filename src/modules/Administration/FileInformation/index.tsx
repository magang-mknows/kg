import React, { FC, ReactElement } from "react";

import { Disclosure, Transition } from "@headlessui/react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const FileInformation: FC = (): ReactElement => {
  return (
    <>
      <Disclosure as={"div"} className={`${montserrat.className} w-full  text-neutral-900`}>
        {({ open }) => (
          <>
            <Disclosure.Button className="py-3 px-4 text-base mb-4 bg-neutral-200 flex justify-between w-full items-center">
              <p>Informasi Berkas</p>
              <MdOutlineKeyboardArrowDown
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-neutral-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition ease duration-500 transform"
              enterFrom="opacity-0 -translate-y-12"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-300 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-12"
            >
              <Disclosure.Panel className="text-neutral-900 text-sm px-4">
                <section>
                  <h1 className="mb-4">
                    Kartu Tanda Penduduk (KTP) <span>*</span>
                  </h1>
                  <div>
                    <label
                      htmlFor="input-ktp"
                      className="flex  items-center rounded-md overflow-hidden"
                    >
                      <h1 className="bg-primary-500 border-2 border-primary-500 text-white w-fit  px-4 py-2 rounded-l-md">
                        Pilih File
                      </h1>
                      <p className="px-8 border-2   w-auto border-neutral-200 text-neutral-400 py-2">
                        Tidak ada file yang dipilih
                      </p>
                      <p className="px-4 bg-primary-100 text-neutral-600 py-3  text-xs">
                        .jpg,.jpeg,.pdf
                      </p>
                      <input type="file" name="input-ktp" id="input-ktp" className="hidden" />
                    </label>
                  </div>
                </section>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default FileInformation;
