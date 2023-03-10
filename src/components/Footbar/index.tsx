import { FC, ReactElement } from "react";

// img
import Instagram from "@/assets/instagram.svg";
import Facebook from "@/assets/facebook.svg";
import Twitter from "@/assets/twitter.svg";
import Linkedin from "@/assets/linkedin.svg";
import GooglePlayStore from "@/assets/google-play-store.svg";
import Image from "next/image";

import { LoadConditionalLogo } from "@/utilities/helper/index";
import GlobalButton from "../Common/GlobalButton";
import Footer from "@/components/Common/Footer";

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
      <div className="py-10 mx-5 text-justify  md:text-justify lg:mx-20 md:mx-10 md:py-5 sm:mx-10 xs:mx-10">
        <div className="grid gap-2  grid-1 md:grid-cols-2 lg:grid-cols-4">
          {/* kampus gratis */}
          <div className="text-sm w-full lg:w-[360px]">
            <Image src={LoadConditionalLogo()} className="mb-4  h-19 w-100 sm:h-15" alt="logo" />
            <p className="lg:text-[14px] dark:text-gray-400">
              Kampus Gratis merupakan Kampus Gratis disingkat KG, merupakan sistem manajemen
              e-learning, yang mencantumkan laporan peningkatan atau kemajuan pembelajaran
              mahasiswa, layaknya perguruan tinggi.
            </p>

            <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-0 sm:mt-4">
              <div className="flex flex-row my-4 space-x-4">
                <GlobalButton
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                  to="/"
                  icon={<Image className="w-4 h-4" src={Facebook} alt="Facebook" />}
                />
                <GlobalButton
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                  to="/"
                  icon={<Image className="w-4 h-4" src={Twitter} alt="Twitter" />}
                />
                <GlobalButton
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                  to="/"
                  icon={<Image className="w-4 h-4" src={Linkedin} alt="Linkedin" />}
                />
                <GlobalButton
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                  to="/"
                  icon={<Image className="w-4 h-4" src={Instagram} alt="Instagram" />}
                />
              </div>
              <div className="mt-[-10px] lg:ml-0 sm:ml-[-10px]">
                <a href="" className="">
                  <Image
                    className="lg:w-[162px] lg:h-[62px]"
                    src={GooglePlayStore}
                    alt="Google Play Store"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Halaman */}
          <div
            className="
            lg:pl-[160px]"
          >
            <h6 className="flex text-[18px] font-bold dark:text-white">Halaman</h6>

            <p className="mb-2 mt-8 lg:text-[14px]  dark:text-gray-400">
              <a href="#!" className="hover:text-blue-400">
                Beranda
              </a>
            </p>
            <p className="mb-2 lg:text-[14px] dark:text-gray-400">
              <a href="#!" className="hover:text-blue-400">
                Fitur
              </a>
            </p>
            <p className="mb-2 lg:text-[14px] dark:text-gray-400 ">
              <a href="#!" className="hover:text-blue-400">
                Mentor
              </a>
            </p>
            <p className="mb-2 lg:text-[14px] dark:text-gray-400">
              <a href="#!" className="hover:text-blue-400">
                Panduan
              </a>
            </p>
          </div>

          {/* Kontak */}

          <div className="lg:pl-[40px] text-start">
            <h6 className="mb-4 flex text-black text-[18px] font-bold md:justify-start dark:text-white">
              Kontak
            </h6>

            <p className="lg:text-[14px] mb-2 mt-8">
              <a className="dark:text-gray-400">+62 2143 1244 </a>
            </p>
            <p className="lg:text-[14px] mb-2">
              <a className="dark:text-gray-400">kampusgratis123@gmail.com</a>
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

      <hr className="py-5  lg:mx-20 md:mx-10 md:py-2 sm:mx-10 xs:mx-10" />

      <Footer />
    </footer>
  );
};
export default Footbar;
