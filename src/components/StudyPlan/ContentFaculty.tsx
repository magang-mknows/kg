import { FC, ReactElement } from "react";
import Link from "next/link";
import MainLayouts from "@/layouts/Main";
import Card from "@/components/Common/Card";

import ImgChoiceFaculty from "@/assets/choicefaculty.svg";
import ImgChoiceFaculty2 from "@/assets/choicefaculty2.svg";
import ImgChoiceFaculty3 from "@/assets/choicefaculty3.svg";
import ImgChoiceFaculty4 from "@/assets/choicefaculty4.svg";

const ContentFaculty: FC = (): ReactElement => {
  const data = [
    {
      src: ImgChoiceFaculty,
      deskripsi: "Teknologi Informasi",
      jumlahstudi: 4,
      slug: "/teknologi-infromasi",
    },
    {
      src: ImgChoiceFaculty2,
      deskripsi: "Pembiayaan dan Optimalisasi Bisnis",
      jumlahstudi: 6,
      slug: "/pembiayaan-optimasi-bisnis",
    },
    {
      src: ImgChoiceFaculty3,
      deskripsi: "Japanese Culture",
      jumlahstudi: 4,
      slug: "/japanese-culture",
    },
    {
      src: ImgChoiceFaculty4,
      deskripsi: "Design Digitals",
      jumlahstudi: 4,
      slug: "/design-digital",
    },
  ];

  return (
    <MainLayouts>
      <h5 className="text-2xl font-semibold lg:p-2 p-0">Pilihan Fakultas</h5>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-40">
        {data.map((x, i) => (
          <Card
            key={i}
            href={"/studyprogram/" + x.slug}
            className="rounded-lg px-3 "
            hasImage={true}
            src={x.src}
            titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
            icon={
              <div className="flex flex-row space-x-1 px-2">
                <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                  {x.jumlahstudi} Program Study
                </div>
              </div>
            }
          >
            <div className="text-xl mt-0 text-[#106FA4] w-full">{x.deskripsi}</div>
          </Card>
        ))}
      </div>
    </MainLayouts>
  );
};

export default ContentFaculty;
