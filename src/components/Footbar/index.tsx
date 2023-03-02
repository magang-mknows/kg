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

const Footbar: FC = (): ReactElement => {
  return (
    <footer
      className="
        bg-[#F5F5F5]
        text-center 
        text-[#262626]
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
          gap-2
          md:grid-cols-2 
          lg:grid-cols-4"
        >
          {/* kampus gratis */}
          <div className="text-sm w-full lg:w-[360px]">
            <Image
              src={LoadConditionalLogo()}
              className="
                h-19 
                w-100 
                mb-4 
                sm:h-15
                "
              alt="logo"
            />
            <p className="lg:text-[14px] dark:text-gray-400">
              Kampus Gratis merupakan sistem manajemen E-learning yang mencantumkan laporan
              peningkatan atau progres pembelajaran mahasiswa layaknya seperti perguruan tinggi.
            </p>

            <div
              className="
              flex 
              flex-row 
              my-4
              space-x-[2px]"
            >
              <GlobalButton
                size="small"
                className="bg-transparent hover:bg-transparent"
                to="/"
                icon={<Image className="w-4 h-4" src={Facebook} alt="Facebook" />}
              />
              <GlobalButton
                size="small"
                className="bg-transparent hover:bg-transparent"
                page="/"
                icon={<Image className="w-4 h-4" src={Twitter} alt="Twitter" />}
              />
              <GlobalButton
                size="small"
                className="bg-transparent hover:bg-transparent"
                page="/"
                icon={<Image className="w-4 h-4" src={Linkedin} alt="Linkedin" />}
              />
              <GlobalButton
                size="small"
                className="bg-transparent hover:bg-transparent"
                page="/"
                icon={<Image className="w-4 h-4" src={Instagram} alt="Instagram" />}
              />
              <a href="" className="mt-[-16px] w-full pl-[80px] ml-2">
                <Image
                  className="lg:w-[162px] lg:h-[62px]"
                  src={GooglePlayStore}
                  alt="Google Play Store"
                />
              </a>
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

            <div className="flex flex-row mb-2 mt-7 lg:text-[14px]">
              <div className=" dark:text-white">Utama </div>
              <div className=" dark:text-white ml-2">: </div>
              <div className="dark:text-gray-400 ml-2">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130
              </div>
            </div>
            <div className="flex flex-row mb-2 mt-2 lg:text-[14px]">
              <div className=" dark:text-white">Cabang </div>
              <div className=" dark:text-white ml-2">: </div>
              <div className="dark:text-gray-400 ml-2">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130
              </div>
            </div>
            <div className="flex flex-row mb-2 mt-2 lg:text-[14px]">
              <div className=" dark:text-white">Cabang </div>
              <div className=" dark:text-white ml-2">: </div>
              <div className="dark:text-gray-400 ml-2">
                Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12130
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr
        className="
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
        <div className="dark:text-gray-400">2022 - www.kampusgratis.id - Hak Cipta Dilindungi.</div>
        <div
          className="
            flex 
            justify-center 
            sm:space-x-2
            xs:text-xs"
        >
          <div className="mr-4 hover:text-blue-400 dark:text-gray-400 xs:pb-2">
            <a href="" className="hover:text-blue-400">
              Terms of use
            </a>
          </div>
          <div className="mr-4 dark:text-gray-400">
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
