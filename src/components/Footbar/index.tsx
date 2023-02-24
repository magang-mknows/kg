import { FC, ReactElement, useEffect, useCallback } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import Link from "next/link";

// img
import Instagram from "@/assets/Instagram.png";
import Facebook from "@/assets/facebook.png";
import Tiktok from "@/assets/tiktok.png";
import Linkedin from "@/assets/linkedin.png";
import Image from "next/image";
import useDarkMode from "@/hooks/Theme/useDarkMode";

import { LoadConditionalLogo } from "@/utilities/helper";
import GlobalButton from "../Common/GlobalButton";

const Footbar: FC = (): ReactElement => {

  return (
    <footer
      className="
        bg-slate-100
        text-center 
        text-neutral-600 
        pt-8
        lg:text-left
        dark:bg-[#222529]
        transition-all ease-in-out duration-300"
    >
      <div
        className="
        text-justify
        md:text-justify
        mx-5 
        py-10 
        lg:mx-20 
        md:mx-10
        md:py-5
        sm:mx-10
        xs:mx-10"
      >
        <div
          className="
          grid-1 
          grid 
          gap-4
          md:grid-cols-2 
          lg:grid-cols-4"
        >
          {/* kampus gratis */}
          <div className="text-sm">
            <Image
              src={LoadConditionalLogo()}
              className="
                h-19 
                w-100 
                mb-4 
                sm:h-15"
              alt="logo"
            />
            <p className="md: sm-10 dark:text-gray-400">
              Kampus Gratis merupakan sistem manajemen E-learning yang mencantumkan laporan
              peningkatan atau progres pembelajaran mahasiswa layaknya seperti perguruan tinggi.
            </p>

            {/* other social media */}
            <div
              className="
              flex 
              flex-row 
              my-4
              space-x-2"
            >

            <GlobalButton
              buttonType = "auth"
              size="small"
              className = ""
              page = "/"
              color = "white"
              icon={<Image
              className="w-4 h-4"
                src={Instagram}
                alt="Instagram"
              />}
              >
              </GlobalButton>
              </div>
          </div>

          {/* Fitur */}
          <div
            className="
            lg:ml-16"
          >
            <h6 className="mb-4 flex text-black text-2xl font-bold dark:text-white">Fitur</h6>

            <p className="mb-2 mt-8  dark:text-gray-400 xs:text-sm sm:text-md">
              <a href="#!" className="hover:text-blue-400">
                Administrasi
              </a>
            </p>
            <p className="mb-2 dark:text-gray-400 xs:text-sm sm:text-md">
              <a href="#!" className="hover:text-blue-400">
                Rencana Studi
              </a>
            </p>
            <p className="mb-2 dark:text-gray-400 xs:text-sm sm:text-md">
              <a href="#!" className="hover:text-blue-400">
                Studiku
              </a>
            </p>
            <p className="mb-2 dark:text-gray-400 xs:text-sm sm:text-md">
              <a href="#!" className="hover:text-blue-400">
                Panduan
              </a>
            </p>
            <p className="mb-2 dark:text-gray-400 xs:text-sm sm:text-md">
              <a href="#!" className="hover:text-blue-400 ">
                Sekilas Ilmu
              </a>
            </p>
          </div>

          {/* Kontak */}

          <div className="text-start">
            <h6 className="mb-4 flex text-black text-2xl font-bold md:justify-start dark:text-white ">
              Kontak
            </h6>

            <p className="mb-2 mt-8">
              <a className="text-gray-400 dark:text-white xs:text-sm sm:text-md">Telp : </a>
              <a className="dark:text-gray-400 xs:text-sm sm:text-md">0217209729 </a>
            </p>
            <p className="mb-2">
              <a className="text-gray-400 dark:text-white xs:text-sm sm:text-md">Email : </a>
              <a className="dark:text-gray-400 xs:text-sm sm:text-md">learning@m-knowsconsulting.com </a>
            </p>
          </div>

          {/* Alamat */}

          <div className="text-start">
            <h6 className="mb-4 flex text-black text-2xl font-bold md:justify-start dark:text-white">
              Alamat
            </h6>

            <p className="mb-2 mt-7">
              <a className="text-gray-400 dark:text-white xs:text-sm sm:text-md">Utama : </a>
              <a className="dark:text-gray-400 xs:text-sm sm:text-md">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130{" "}
              </a>
            </p>
            <p className="mb-2">
              <a className="text-gray-400 dark:text-white xs:text-sm sm:text-md">Cabang : </a>
              <a className="dark:text-gray-400 xs:text-sm sm:text-md">
                Jl. Raya Cirendeu No.59, Cireundeu, Kec. Ciputat Timur., Kota Tangerang Selatan,
                Banten 15419
              </a>
            </p>
            <p className="mb-2">
              <a className="text-gray-400 dark:text-white xs:text-sm sm:text-md">Cabang : </a>
              <a className="dark:text-gray-400 xs:text-sm sm:text-md">Jl. Raya Darmo Permai III Surabaya. 60119</a>
            </p>
          </div>
        </div>
      </div>

      <hr
        className="
        mx-10
        mx-5 
        py-5 
        lg:mx-20 
        md:mx-10
        md:py-2
        sm:mx-10
        xs:mx-10"
      />

      <div
        className="
        flex 
        flex-col
        md:flex-row
        mx-10
        pb-8
        lg:mx-20 
        md:mx-10
        md:py-2
        sm:mx-10
        xs:mx-10
        justify-between"
      >
        <div className="dark:text-gray-400 xs:text-sm sm:text-md xs:text-xs sm:my-2 xs:my-2">2022 - www.kampusgratis.id - Hak Cipta Dilindungi.</div>
        <div
          className="
            flex 
            justify-center 
            sm:space-x-2
            xs:text-xs
            sm:my-2"
        >
          <div className="px-2 hover:text-blue-400 dark:text-gray-400">
            <a href="" className="hover:text-blue-400">
              Terms of use
            </a>
          </div>
          <div className="px-[-1em]">
            •
          </div>
          <div className="px-2 dark:text-gray-400">
            <a href="" className="hover:text-blue-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footbar;
