import { FC, ReactElement } from "react";
import Card from "@/components/Common/Card";
import dummyDrill from "@/assets/dummy-drill.svg";
import Button from "@/components/Common/Button";

const SimulationSubmission: FC = (): ReactElement => {
  const cek = [
    {
      src: dummyDrill,
      dosen: "Bambang Sutioso, S.Ak",
      title: " Sales dan Penjualan",
      jadwal: 3,
      category: "Simulasi",
    },
    {
      src: dummyDrill,
      dosen: "Elsa Frozen, S.Es",
      title: "Kredit dan Survei",
      jadwal: 2,
      category: "Drill",
    },
    {
      src: dummyDrill,
      dosen: "Mujahidin, S.Ak, M.Ak",
      title: "Manajement Keuangan",
      category: "Assessmen",
      jadwal: 0,
    },
  ];
  return (
    <div className="flex flex-wrap mb-20 lg:justify-evenly md:justify-around justify-center md:gap-10 lg:gap-10 ">
      {cek.map((items, i) => (
        <Card
          key={i}
          hasImage
          src={items.src}
          className="px-0 py-0 border-[#E5E5E5] border-2 rounded-lg"
          imgStyle="rounded-tl-[7px] rounded-tr-[7px] relative z-10 "
        >
          <div className="mb-10 px-5 w-full ">
            <div
              className={`text-black text-[12px] font-[500] rounded-[7px] inline-block px-3 relative z-20 -top-48 justify-end  ${
                items.category === "Simulasi"
                  ? "bg-primary-500 text-white -right-64 ml-5"
                  : items.category === "Drill"
                  ? "bg-secondary-yellow-600 text-white -right-72 ml-3"
                  : items.category === "Assessmen"
                  ? "bg-white  -right-64 ml-1"
                  : ""
              }`}
            >
              {items.category === "Simulasi"
                ? "Simulasi"
                : items.category === "Drill"
                ? "Drill"
                : items.category === "Assessmen"
                ? "Assessmen"
                : ""}
            </div>
            <div className="flex font-[500] text-[12px] text-[#404040] rounded-[7px] gap-4">
              <div className=" bg-[#E9F6FD] px-3 py-1 rounded-[9px]">{items.dosen}</div>
              {items.jadwal === 0 ? (
                ""
              ) : (
                <div className="bg-[#E3FBDA] px-3 py-1 rounded-[9px]">
                  {items.jadwal} Jadwal Tersedia
                </div>
              )}
            </div>
            <div className="text-[16px] font-[600] text-[#262626] mt-3 ml-1">{items.title}</div>
            <div className="flex mt-4 justify-end">
              <Button
                disabled={items.jadwal === 0 ? true : false}
                type="submit"
                text={items.jadwal === 0 ? "Tidak Ada Jadwal Tersedia" : "Lihat Jadwal Simulasi"}
                className="bg-[#3EB449] font-[600] text-[12px] rounded-[8px] text-white w-[182px] h-[35px] disabled:bg-[#D4D4D4] disabled:text-[#A3A3A3]  disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SimulationSubmission;
