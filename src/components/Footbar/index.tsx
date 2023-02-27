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

            <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M17.835,0.438H2.29c-0.954,0-1.727,0.773-1.727,1.727V17.71c0,0.954,0.773,1.728,1.727,1.728h15.545c0.954,0,1.728-0.773,1.728-1.728V2.165C19.562,1.211,18.789,0.438,17.835,0.438 M18.699,17.71c0,0.477-0.388,0.864-0.864,0.864H2.29c-0.477,0-0.863-0.388-0.863-0.864V2.165c0-0.477,0.387-0.863,0.863-0.863h15.545c0.477,0,0.864,0.387,0.864,0.863V17.71zM12.653,5.619H7.472c-0.954,0-1.728,0.773-1.728,1.728v5.182c0,0.954,0.773,1.728,1.728,1.728h5.182c0.954,0,1.728-0.773,1.728-1.728V7.347C14.381,6.393,13.607,5.619,12.653,5.619 M11.79,6.915h1.295V8.21H11.79V6.915z M10.062,8.21c0.954,0,1.728,0.773,1.728,1.727s-0.773,1.728-1.728,1.728c-0.954,0-1.727-0.773-1.727-1.728S9.109,8.21,10.062,8.21M13.518,12.528c0,0.478-0.388,0.863-0.864,0.863H7.472c-0.477,0-0.864-0.386-0.864-0.863V9.505h0.907C7.491,9.647,7.472,9.79,7.472,9.938c0,1.432,1.16,2.591,2.591,2.591c1.432,0,2.591-1.159,2.591-2.591c0-0.148-0.02-0.291-0.044-0.432h0.908V12.528z"></path>
						</svg>
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
