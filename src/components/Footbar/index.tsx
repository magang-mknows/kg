import { FC, ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Instagram from "@/assets/Instagram.png"
import Facebook from "@/assets/facebook.png"
import Tiktok from "@/assets/tiktok.png"
import Linkedin from "@/assets/linkedin.png"
import Image from "next/image";

const Footbar: FC = (): ReactElement => {
  return (
    <footer
      className="
        bg-slate-100
        text-center 
        text-neutral-600 
        lg:text-left">

      <div className="
        mx-20 
        py-10 
        text-justify
        lg:mx-10
        md:text-justify 
        md:mx-10 
        md:py-5
        sm:mx-10
        xs:mx-10">

        <div className="
          grid-1 
          grid 
          gap-10
          md:grid-cols-2 
          lg:grid-cols-4">
            {/* kampus gratis */}
          <div className="text-sm">
            <Image
              src={Logo}
              className="
                h-19 
                w-100 
                mb-4 
                sm:h-15"
              alt="logo"
              />
            <p className="md: sm-10">
            Kampus Gratis merupakan sistem manajemen E-learning yang mencantumkan laporan peningkatan atau progres pembelajaran mahasiswa layaknya seperti perguruan tinggi.
            </p>
            
            {/* other social media */}
            <div className="
              flex 
              flex-row 
              mt-2
              space-x-2">
                
                <button className="
                  bg-white
                  hover:bg-red
                  rounded-md
                  w-8
                  h-8
                  "><a 
                      href="https://instagram.com/kampus.gratis"
                      target="blank">

                    <Image
                      className="
                      w-4
                      h-4 
                      ml-2"
                      src={Instagram}
                      alt="Instagram"
                      />

                      </a>
                  </button>

                <button className="
                  bg-white
                  hover:bg-red
                  rounded-md
                  w-8
                  h-8
                  ">

                    <a 
                      href="https://www.facebook.com/learningkampusgratis/"
                      target="blank">

                    <Image
                      className="
                      w-2
                      h-4 
                      ml-3"
                      src={Facebook}
                      alt="facebook"
                      />
                      </a>

                  </button>

                <button className="
                  bg-white
                  hover:bg-red
                  rounded-md
                  w-8
                  h-8
                  ">

                    <a 
                      href="https://www.tiktok.com/@kampusgratis_"
                      target="blank">

                    <Image
                      className="
                      w-6
                      h-4 
                      ml-1"
                      src={Tiktok}
                      alt="titkok"
                      />

                      </a>

                  </button>

                <button className="
                  bg-white
                  hover:bg-red
                  rounded-md
                  w-8
                  h-8
                  ">

                    <a 
                      href="https://www.linkedin.com/in/kampusgratis/"
                      target="blank">

                    <Image
                      className="
                      w-3
                      h-3 
                      ml-2.5"
                      src={Linkedin}
                      alt="linkedin"
                      />

                      </a>

                  </button>
            </div>
          </div>

          {/* Fitur */}
          <div className="
            lg:ml-16">

            <h6
              className="mb-4 flex text-black text-2xl font-bold">
              Fitur
            </h6>

            <p className="mb-2 mt-8">
              <a href="#!" className="hover:text-blue-400"
                >Administrasi</a
              >
            </p>
            <p className="mb-2">
              <a href="#!" className="hover:text-blue-400"
                >Rencana Studi</a
              >
            </p>
            <p className="mb-2">
              <a href="#!" className="hover:text-blue-400"
                >Studiku</a
              >
            </p>
            <p className="mb-2">
              <a href="#!" className="hover:text-blue-400"
                >Panduan</a
              >
            </p>
            <p className="mb-2">
              <a href="#!" className="hover:text-blue-400"
                >Sekilas Ilmu</a
              >
            </p>

          </div>

          {/* Kontak */}

          <div className="text-start">
            <h6
              className="mb-4 flex text-black text-2xl font-bold md:justify-start">
              Kontak
            </h6>

            <p className="mb-2 mt-8">
              <a className="text-gray-400"
                >Telp : </a
              >
              <a className=""
                >0217209729 </a
              >
            </p>
            <p className="mb-2">
              <a className="text-gray-400"
                >Email : </a
              >
              <a className=""
                >learning@m-knowsconsulting.com </a
              >
            </p>

          </div>

          {/* Alamat */}

          <div className="text-start">
            <h6
              className="mb-4 flex text-black text-2xl font-bold md:justify-start">
              Alamat
            </h6>

            <p className="mb-2 mt-8">
              <a className="text-gray-400"
                >Utama : </a
              >
              <a className=""
                >Jl. Radio IV No.8 B, RW.4, Kramat Pela, Kec. Kby.Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130 </a
              >
            </p>
            <p className="mb-2">
              <a className="text-gray-400"
                >Cabang : </a
              >
              <a className=""
                >Jl. Raya Cirendeu No.59, Cireundeu, Kec. Ciputat Timur., Kota Tangerang Selatan, Banten 15419</a
              >
            </p>
            <p className="mb-2">
              <a className="text-gray-400"
                >Cabang : </a
              >
              <a className=""
                >Jl. Raya Darmo Permai III Surabaya. 60119</a
              >
            </p>

          </div>

          
        </div>
      </div>

      <hr className="mx-10" />

      <div className="
        flex 
        flex-col
        md:flex-row
        mx-10 
        pt-8 
        pb-8 
        justify-between
        ">

          <div>
            2022 - www.kampusgratis.id - Hak Cipta Dilindungi.
          </div>
          <div className="
            flex 
            justify-center 
            sm:space-x-2
            sm:mt-4
            xs:mt-4">

            <div className="mr-4 hover:text-blue-400">
              <a href="">
                Terms of use
              </a>
            </div>
            <div className="mr-4 hover:text-blue-400">
              <a href="">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* <hr className="mt-4" /> */}
          {/* <div className="flex flex-row grid-1 
          grid 
          gap-10
          md:grid-cols-2 
          lg:grid-cols-4">
            <div>
              test
            </div>
            <div>
              tes
            </div>
          </div> */}
      </div>
    </footer>
  );
};
export default Footbar;
