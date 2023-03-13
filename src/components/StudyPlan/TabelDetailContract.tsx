import { FC, ReactElement } from "react";
import Image from "next/image";
import Example1 from "@/assets/example1.svg";
import Example2 from "@/assets/example2.svg";

const tabel = [
  {
    no: 1,
    matkul: "Bahasa Inggris",
    img: Example1,
    jmlh_mahasiswa: 15,
    kode_matkul: "123ASD65",
    jmlh_sks: 4,
    tindakan: "tambah",
  },
  {
    no: 2,
    matkul: "Kalkulus",
    img: Example2,
    jmlh_mahasiswa: 21,
    kode_matkul: "AHHH824",
    jmlh_sks: 8,
    tindakan: "hapus",
  },
];

const TabelDetailContract: FC = (): ReactElement => {
  return (
    <>
      <div className="p-8">
        <table className="min-w-full border border-gray-200  rounded-lg divide-y divide-neutral-400 dark:divide-gray-700">
          <thead className=" bg-gray-100 ">
            <tr>
              <th className="p-3 rounded-md">No.</th>
              <th className="text-start ">Mata Kuliah</th>
              <th className="text-start">Kode Matkul</th>
              <th className="text-start">Jumlah SKS</th>
              <th className="text-start">Tindakan</th>
            </tr>
          </thead>
          {tabel.map((x, i) => (
            <tbody key={i} className="divide-y dark:divide-gray-700  ">
              <tr className="border">
                <td className="p-3 text-center">{x.no}</td>
                <td>
                  <div className="flex justify-center w-full gap-4 p-4">
                    <div>
                      <Image src={x.img} alt="User" />
                    </div>
                    <div className="flex w-full flex-col w-auto">
                      <h1 className="font-bold text-start">{x.matkul}</h1>
                      <p className="text-gray-400 text-start">
                        {x.jmlh_mahasiswa} Mahasiswa Terdaftar
                      </p>
                    </div>
                  </div>
                </td>
                <td>{x.kode_matkul}</td>
                <td>{x.jmlh_sks} SKS</td>
                <td
                  className={`flex gap-2 items-center p-4 font-semibold ${
                    x.tindakan === "tambah" ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {x.tindakan === "tambah" ? (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.311523"
                        width="24.3762"
                        height="24.3762"
                        rx="12.1881"
                        fill="#106FA4"
                      />
                      <path
                        d="M19.298 13.515H13.204V19.6091H11.1727V13.515H5.07861V11.4837H11.1727V5.38965H13.204V11.4837H19.298V13.515Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.311523"
                        width="24.3762"
                        height="24.3762"
                        rx="12.1881"
                        fill="#EE2D24"
                      />
                      <path
                        d="M16.4971 18.2445L12.188 13.9354L7.87885 18.2445L6.44247 16.8081L10.7516 12.499L6.44247 8.18986L7.87885 6.75348L12.188 11.0626L16.4971 6.75348L17.9335 8.18986L13.6244 12.499L17.9335 16.8081L16.4971 18.2445Z"
                        fill="white"
                      />
                    </svg>
                  )}

                  {x.tindakan === "tambah" ? " tambah " : "hapus"}
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th scope="row" className="px-6 py-3 text-base">
                Total SKS
              </th>
              <td></td>
              <td></td>
              <td className="font-bold">12 SKS</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default TabelDetailContract;
