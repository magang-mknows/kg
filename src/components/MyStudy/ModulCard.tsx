import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";

const ModulCard: FC = (): ReactElement => {
  return (
    <div className="w-full justify-start px-32 p-10">
      <Card
        hasImage={false}
        className="border border-2 text-start rounded-lg"
        href="/studi-ku/modul/modul1"
      >
        <div className="flex flex-col p-4">
          <h1 className="font-bold text-xl">
            Modul 1 <span className="text-gray-500">(Materi 1)</span>
          </h1>

          <p className="text-md text-gray-600 py-4">
            Pertemuan 1 |{" "}
            <span className="text-gray-400">
              {" "}
              Modul ini berisi tentang penjelasan secara sederhana tentang manajemen keuangan,
              session 1.
            </span>
          </p>
          <div className="flex gap-3">
            <div className=" flex gap-3 text-black px-2 py-2 my-[10px] text-[12px] rounded-[5px]  bg-[#E3FBDA]">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5656 0H1.89897C0.973966 0 0.2323 0.741667 0.2323 1.66667V13.3333C0.2323 14.25 0.9823 15 1.89897 15H13.5656C14.4823 15 15.2323 14.25 15.2323 13.3333V1.66667C15.2323 1.22464 15.0567 0.800716 14.7441 0.488155C14.4316 0.175595 14.0077 0 13.5656 0ZM6.06563 10.8333V4.16667L10.2323 7.5"
                  fill="#3EB449"
                />
              </svg>
              <p>3 video</p>
            </div>
            <div className="flex gap-3 text-black px-2 py-2 my-[10px] text-[12px] rounded-[5px]  bg-[#FEF6D0]">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.06238 8.25C6.9795 8.25 6.90001 8.21708 6.84141 8.15847C6.7828 8.09987 6.74988 8.02038 6.74988 7.9375V0.75H0.968628C0.844308 0.75 0.725079 0.799386 0.637172 0.887294C0.549264 0.975201 0.499878 1.09443 0.499878 1.21875V17.7812C0.499878 17.9056 0.549264 18.0248 0.637172 18.1127C0.725079 18.2006 0.844308 18.25 0.968628 18.25H13.7811C13.9054 18.25 14.0247 18.2006 14.1126 18.1127C14.2005 18.0248 14.2499 17.9056 14.2499 17.7812V8.25H7.06238ZM11.1249 14.5H3.62488V13.25H11.1249V14.5ZM11.1249 11.375H3.62488V10.125H11.1249V11.375Z"
                  fill="#EE2D24"
                />
              </svg>

              <p>3 Dokumen</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModulCard;
