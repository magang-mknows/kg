import { FC, ReactElement} from "react";
import Card from "@/components/Common/Card";
import search from "@/assets/semuaFitur/search.svg";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterSemuaFitur, querySemuaFitur } from "@/stores/SemuaFitur";

const Features: FC = (): ReactElement => {

  const [query, setQuery] = useRecoilState(querySemuaFitur);
  const getSemuafitur = useRecoilValue(filterSemuaFitur);

  return (
    <>
      <section className="pt-5 lg:px-[72px] md:px-[72px] px-[50px] bg-white w-full">
        <p className="font-bold text-[28px] text-center">Apa yang ingin kamu pelajari?</p>
        <p className="text-[#A3A3A3] font-semibold text-[16px] text-center">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
          Berbagai macam jenis materi tersedia.
        </p>
        <div className="flex bg-[#F5F5F5] my-[36px] rounded-lg py-[16px] px-[26px] w-full">
          <Image src={search} alt={"tes"} />
          <input
            type="text"
            placeholder="Cari Fitur"
            className="ml-[24px] w-full bg-[#F5F5F5] focus:outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="grid grid-cols-12 gap-x-[40px] gap-y-[34px]">
          {getSemuafitur.map((fitur) => {
            return (
              <div
                key={fitur.id}
                style={{ background: fitur.warna }}
                className="lg:col-span-3 md:col-span-4 col-span-6 py-[25px] rounded-lg lg:scale-100 md:scale-100 scale-90"
              >
                <Card
                  href={fitur.slug}
                  hasImage={true}
                  src={fitur.icon}
                  imgStyle="w-[80px] mx-auto"
                  imgwidth={80}
                 
                  
                >
                  <p className="font-bold mx-auto">{fitur.namaFitur}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
