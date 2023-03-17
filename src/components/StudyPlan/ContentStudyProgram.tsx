import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import { useRecoilValue, useRecoilState } from "recoil";
import { queryOptionSubject, filterOptionSubject } from "@/stores/StudyPlan";
import MainLayouts from "@/layouts/Main";
import DefaultView from "@/assets/StudyPlan/DataKosong.png";
import ContentLayouts from "@/layouts/Content";
import Search from "@/assets/StudyPlan/search.svg";
import Card from "../Common/Card";
import { useRouter } from "next/router";

const ContentStudyProgram: FC = (): ReactElement => {
  const { query: q } = useRouter();
  const getOptionSubject = useRecoilValue(filterOptionSubject(q.slug as unknown as string));
  const [query, setQuery] = useRecoilState(queryOptionSubject);
  const [isClose, setClose] = useState(false);
  return (
    <MainLayouts>
      <div className="flex p-8 justify-center px-40 items-center flex-col">
        <div className="bg-gray-200 dark:bg-gray-300 dark:text-white  w-full h-[56px] mt-10 mb-10 rounded-[8px]">
          <div className="flex ml-5 py-4">
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
      <ContentLayouts>
        <div
          className={`${
            isClose && "hidden"
          } flex bg-yellow-100 dark:bg-yellow-300 border border-yellow-400 dark:border-yellow-100 dark:text-whitetext-yellow-700 px-4 py-3 rounded relative`}
          role="alert"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.30931 0.635506C6.25594 0.669123 4.29827 1.50947 2.85951 2.97489C1.40495 4.42305 0.602043 6.4006 0.635399 8.45287C0.633013 10.4574 1.42854 12.3804 2.84635 13.7973C4.26416 15.2143 6.18763 16.0087 8.19212 16.0051H8.32916C12.6059 15.9611 16.0398 12.4633 16.005 8.18646C16.0098 6.15713 15.1958 4.21166 13.7473 2.79039C12.2988 1.36912 10.3382 0.59221 8.30931 0.635506ZM7.3596 11.229C7.35027 10.9753 7.44336 10.7286 7.61789 10.5443C7.79243 10.36 8.03375 10.2537 8.28754 10.2492H8.30483C8.82997 10.2502 9.26056 10.6658 9.28016 11.1906C9.28966 11.4443 9.19664 11.6911 9.02206 11.8755C8.84749 12.0598 8.60606 12.1661 8.35222 12.1704H8.33493C7.81005 12.1687 7.37985 11.7535 7.3596 11.229ZM7.6798 4.79811V8.64051C7.6798 8.99419 7.96652 9.28091 8.3202 9.28091C8.67388 9.28091 8.9606 8.99419 8.9606 8.64051V4.79811C8.9606 4.44442 8.67388 4.15771 8.3202 4.15771C7.96652 4.15771 7.6798 4.44442 7.6798 4.79811Z"
              fill="#F9B400"
            />
          </svg>

          <span className="block sm:inline px-4">
            Kamu hanya bisa mengambil satu(1) program studi
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={() => setClose(true)}
              className="fill-current h-6 w-6 text-gray-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 pb-40">
          <>
            {getOptionSubject.length === 0 ? (
              <div className="flex flex-col w-screen h-screen gap-8 justify-center lg:items-center ">
                <div className="lg:flex hidden h-auto w-auto bg-gray-100 dark:bg-gray-600 rounded-full p-1 lg:p-4">
                  <Image src={DefaultView} alt="simulasi-null" />
                </div>
                <h1 className="text-xl font-bold">Tidak Ada Data Program Studi</h1>
              </div>
            ) : (
              <>
                {getOptionSubject.map((x, i) => (
                  <Card
                    href={"/kontrak-krs" + x.slug}
                    key={i}
                    className="rounded-lg px-3 "
                    hasImage={true}
                    imgStyle="rounded-lg"
                    src={x.src}
                    titleStyle={"text-xl font-bold mt-0 text-[#106FA4]"}
                    icon={
                      <div className="flex flex-row space-x-1 px-4 gap-2">
                        <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                          {x.jumlahmatkul} Mata Kuliah
                        </div>
                        <div className="lg:h-[22px] text-[#ED3768] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#FEDBD7]">
                          {x.sks} SKS
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
      </ContentLayouts>
    </MainLayouts>
  );
};

export default ContentStudyProgram;
