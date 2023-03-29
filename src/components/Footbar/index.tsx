import { FC, ReactElement } from "react";

// img
import Image from "next/image";

import { LoadConditionalLogo } from "@/utilities/helper/index";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import PlayStore from "@/assets/footbar//google-play-store.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Footbar: FC = (): ReactElement => {
  return (
    <footer
      className="
        bg-neutral-200
        text-center 
        text-[#262626]
        pt-8
        lg:text-left
        dark:bg-[#222529]
        transition-all ease-in-out duration-300"
    >
      <div className=" mx-6 lg:mx-20 md:mx-14 md:py-5 ">
        <div className="grid gap-10  grid-1 md:grid-cols-2 lg:grid-cols-4">
          {/* kampus gratis */}
          <div className="text-sm w-full lg:w-[360px]">
            <Image src={LoadConditionalLogo()} className="mb-4  h-19 w-100 sm:h-15" alt="logo" />
            <p className="lg:text-[14px] dark:text-gray-400 text-start">
              Kampus Gratis merupakan Kampus Gratis disingkat KG, merupakan sistem manajemen
              e-learning, yang mencantumkan laporan peningkatan atau kemajuan pembelajaran
              mahasiswa, layaknya perguruan tinggi.
            </p>

            <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-2 sm:mt-4">
              <div className="flex flex-row my-4 space-x-4">
                <div className="w-4 h-4 bg-neutral ">
                  <Link href={"https://instagram.com"} target="_blank">
                    <RiFacebookFill className="text-xl dark:text-white" />
                  </Link>
                </div>
                <div className="w-4 h-4 bg-neutral ">
                  <Link href={"https://instagram.com"} target="_blank">
                    <AiOutlineTwitter className="text-xl dark:text-white" />
                  </Link>
                </div>
                <div className="w-4 h-4 bg-neutral ">
                  <Link href={"https://instagram.com"} target="_blank">
                    <FaLinkedinIn className="text-xl dark:text-white" />
                  </Link>
                </div>
                <div className="w-4 h-4 bg-neutral ">
                  <Link href={"https://instagram.com/kampus.gratis"} target="_blank">
                    <AiOutlineInstagram className="text-xl dark:text-white" />
                  </Link>
                </div>
              </div>
              <div className="mt-[6px] flex justify-end">
                <a href="play.google.com" className="">
                  <Image
                    className="lg:w-full lg:h-[64px]"
                    src={PlayStore}
                    alt="Google Play Store"
                    width={140}
                    height={140}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Halaman */}
          <div
            className="
            lg:pl-[160px] text-start"
          >
            <h6 className="flex text-[18px] font-bold dark:text-white">Halaman</h6>

            <p className="mb-2 mt-8 lg:text-[14px]  dark:text-gray-400">
              <Link href="/" className="hover:text-blue-400">
                Beranda
              </Link>
            </p>
            <p className="mb-2 lg:text-[14px] dark:text-gray-400">
              <Link href="/fitur" className="hover:text-blue-400">
                Fitur
              </Link>
            </p>
            <p className="mb-2 lg:text-[14px] dark:text-gray-400 ">
              <Link href="/mentor" className="hover:text-blue-400">
                Mentor
              </Link>
            </p>
            <p className="mb-2 lg:text-[14px] dark:text-gray-400">
              <Link href="/panduan" className="hover:text-blue-400">
                Panduan
              </Link>
            </p>
          </div>

          {/* Kontak */}

          <div className="lg:pl-[40px] text-start">
            <h6 className="mb-4 flex text-black text-[18px] font-bold md:justify-start dark:text-white">
              Kontak
            </h6>

            <p className="lg:text-[14px] mb-2 mt-8">
              <span className="dark:text-gray-400">+62 2143 1244 </span>
            </p>
            <p className="lg:text-[14px] mb-2">
              <span className="dark:text-gray-400">kampusgratis123@gmail.com</span>
            </p>
          </div>

          {/* Alamat */}

          <div className="text-start">
            <h6 className="mb-4 text-black text-[18px] font-bold md:justify-start dark:text-white">
              Alamat
            </h6>

            <h6 className="text-black text-[14px] font-semibold md:justify-start dark:text-white">
              PT MENARA PENGETAHUAN INDONESIA
            </h6>

            <div className="flex flex-row mb-2 mt-2 lg:text-[14px]">
              <div className=" dark:text-white">Utama </div>
              <div className="ml-2  dark:text-white">: </div>
              <div className="ml-2 dark:text-gray-400">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130
              </div>
            </div>
            <div className="flex flex-row mb-2 mt-2 lg:text-[14px]">
              <div className=" dark:text-white">Cabang </div>
              <div className="ml-2  dark:text-white">: </div>
              <div className="ml-2 dark:text-gray-400">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130
              </div>
            </div>
            <div className="flex flex-row mb-2 mt-2 lg:text-[14px]">
              <div className=" dark:text-white">Cabang </div>
              <div className="ml-2  dark:text-white">: </div>
              <div className="ml-2 dark:text-gray-400">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="py-5  lg:mx-10 md:mx-8 md:py-2 mx-6" />
    </footer>
  );
};
export default Footbar;
