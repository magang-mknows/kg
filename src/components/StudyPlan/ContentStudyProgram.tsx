import { FC, ReactElement } from "react";
import MainLayouts from "@/layouts/Main";
import ContentLayouts from "@/layouts/Content";
import Card from "../Common/Card";

import ImgChoiceFaculty from "@/assets/choicefaculty.svg";
import ImgChoiceFaculty2 from "@/assets/choicefaculty2.svg";
import ImgChoiceFaculty3 from "@/assets/choicefaculty3.svg";
import ImgChoiceFaculty4 from "@/assets/choicefaculty4.svg";

const ContentStudyProgram: FC = (): ReactElement => {
  const data = [
    {
      src: ImgChoiceFaculty,
      deskripsi: "Software Engineering",
      jumlahmatkul: 14,
      sks: 131,
    },
    {
      src: ImgChoiceFaculty2,
      deskripsi: "Broadcasting & DKV",
      jumlahmatkul: 16,
      sks: 112,
    },
    {
      src: ImgChoiceFaculty3,
      deskripsi: "Business Inteligence",
      jumlahmatkul: 10,
      sks: 144,
    },
    {
      src: ImgChoiceFaculty4,
      deskripsi: "Data Instructure",
      jumlahmatkul: 12,
      sks: 120,
    },
    {
      id: 5,
      src: ImgChoiceFaculty,
      deskripsi: "Artificial Intellegence",
    },
  ];
  return (
    <MainLayouts>
      <div className="flex p-8 justify-center items-center flex-col">
        <h3 className="text-xl text-[#737373]">Fakultas</h3>
        <h1 className="text-3xl text-[#106FA4] p-4">Teknologi Informasi</h1>

        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[100%] px-80 p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Cari Mata Kuliah"
              required
            />
          </div>
        </form>
      </div>
      <ContentLayouts>
        <div
          className="flex bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
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
          {data.map((x, i) => (
            <Card
              key={i}
              className="rounded-lg px-3 "
              hasImage={true}
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
        </div>
      </ContentLayouts>
    </MainLayouts>
  );
};

export default ContentStudyProgram;
