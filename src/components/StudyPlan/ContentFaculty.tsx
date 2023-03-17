import { FC, ReactElement } from "react";
import Image from "next/image";
import { useOptionFaculty } from "@/hooks/StudyPlan/useOptionFaculty";
import MainLayouts from "@/layouts/Main";
import DefaultView from "@/assets/StudyPlan/DataKosong.png";
import Card from "@/components/Common/Card";

const ContentFaculty: FC = (): ReactElement => {
  const { getOptionFaculty } = useOptionFaculty();

  return (
    <MainLayouts>
      <h5 className="p-0 text-2xl font-semibold lg:p-2">Pilihan Fakultas</h5>
      <div className="grid grid-cols-1 gap-4 pb-40 lg:grid-cols-3">
        <>
          {getOptionFaculty.length === 0 ? (
            <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
              <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
                <Image src={DefaultView} alt="simulasi-null" />
              </div>
              <h1 className="text-xl font-bold">Tidak Ada Data Fakultas</h1>
            </div>
          ) : (
            <>
              {getOptionFaculty.map((x, i) => (
                <Card
                  key={i}
                  href={"/rencana-studi/fakultas" + x.slug}
                  className="px-3 rounded-lg "
                  imgStyle="rounded-lg"
                  hasImage={true}
                  src={x.src}
                  titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
                  icon={
                    <div className="flex flex-row px-2 space-x-1">
                      <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                        {x.jumlahstudi} Program Study
                      </div>
                    </div>
                  }
                >
                  <div className="text-xl mt-0 text-[#106FA4] w-full">{x.deskripsi}</div>
                </Card>
              ))}
            </>
          )}
        </>
      </div>
    </MainLayouts>
  );
};

export default ContentFaculty;
