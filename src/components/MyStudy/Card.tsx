import { FC, ReactElement } from "react";
import Image from "next/image";
import { useRecoilValue, useRecoilState } from "recoil";
import { filterOptionCourse, queryOptionCourse } from "@/stores/MyStudy";
import DefaultView from "@/assets/StudyPlan/DataKosong.png";
import Search from "@/assets/myStudy/search.svg";
import Card from "../Common/Card";
import { useGetAllSubject } from "@/hooks/MyStudy/useSubjectCard";
import dummy from "@/assets/landing/dummy.webp";
import { TSubject } from "@/services/MyStudy/Subject/types";

const ContentStudyProgram: FC = (): ReactElement => {
  const { data } = useGetAllSubject();
  const getOptionSubject = useRecoilValue(filterOptionCourse);
  const [query, setQuery] = useRecoilState(queryOptionCourse);

  return (
    <>
      <div className="flex lg:p-8 justify-center items-center flex-col">
        <h1 className="font-bold text-2xl">Mata Kuliah</h1>
        <div className="bg-gray-200 dark:bg-gray-300 dark:text-white  w-full h-[56px] mt-10 mb-10 rounded-[8px]">
          <div className="flex lg:ml-5 px-3 py-4">
            <Image src={Search} alt={"search"} width={28} />
            <input
              type={"text"}
              value={query}
              className="bg-transparent w-full focus:outline-none"
              placeholder="Cari Mata Kuliah"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-40">
        <>
          {data?.data?.length === 0 ? (
            <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
              <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
                <Image src={DefaultView} alt="simulasi-null" />
              </div>
              <h1 className="text-xl font-bold">Tidak Ada Data Mata Kuliah</h1>
            </div>
          ) : (
            <>
              {data?.data?.map((x: TSubject) => (
                <Card
                  href={"/studi-ku/course"}
                  key={x.id}
                  className="rounded-lg px-3"
                  hasImage={true}
                  imgStyle="rounded-lg"
                  // src={x.thumbnail}
                  // src={`data:image/png;base64,${x.thumbnail}`}
                  src={dummy}
                  titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
                  icon={
                    <div className="flex justify-end gap-2 py-2">
                      <div className="lg:h-[22px] text-[#FAB317] px-2 my-[10px] text-[12px] rounded-[5px]  bg-[#FEF6D0]">
                        {x.credit} SKS
                      </div>
                      <div className="lg:h-[22px] text-[#106FA4] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E9F6FD]">
                        {x.level} Pertemuan
                      </div>
                    </div>
                  }
                >
                  <div className="flex flex-col w-full">
                    <p className="text-md text-gray-500">{x.subject_code}</p>
                    <h1 className="text-lg font-bold mt-0 text-[#106FA4] w-full">
                      Matkul {x.name}
                    </h1>
                    <p className="text-md text-gray-500 pb-4">nama dosen</p>

                    <div className="flex w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-400 ext-sm pt-20 pl-2">45%</p>
                </Card>
              ))};
            </>
          )};
        </>
      </div>
    </>
  );
};

export default ContentStudyProgram;
