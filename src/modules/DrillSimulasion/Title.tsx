import { FC, ReactElement } from "react";
import Image from "next/image";
import Search from "@/assets/search.svg";
import { useRecoilState } from "recoil";
import { queryScheduleSimulation } from "@/stores/Simulation";

const Title: FC = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryScheduleSimulation);
  return (
    <div className="w-full grid place-content-center py-10">
      <h1 className="text-[28px] font-[700] text-center ">Simulasi, Drill & Assessment</h1>
      <p className="text-[16px] font-[600] text-[#A3A3A3] mt-5 flex text-center">
        Simulasi, Drill & Assessment meningkatkan kemampuan individu dan membantu mencari <br />{" "}
        bakat terbaik untuk posisi yang tepat.
      </p>

      <div className="bg-[#F5F5F5] w-full h-[56px] mt-10 mb-10 rounded-[8px]">
        <div className="flex ml-5 py-4">
          <Image src={Search} alt={"search"} width={28} />
          <input
            type={"text"}
            value={query}
            className="bg-transparent w-full focus:outline-none"
            placeholder="Cari Simulasi"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
