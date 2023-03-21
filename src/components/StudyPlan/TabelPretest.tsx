import { FC, ReactElement } from "react";
import Image from "next/image";
import { useDataTable } from "@/hooks/StudyPlan/useDataTable";
import Example1 from "@/assets/StudyPlan/example1.svg";
import Example2 from "@/assets/StudyPlan/example2.svg";
const tabel = [
  {
    no: 1,
    matkul: "Bahasa Inggris",
    img: Example1,
    jmlh_mahasiswa: 15,
    kode_matkul: "123456ASD",
    jmlh_sks: 4,
    tindakan: "abc.pdf",
  },
  {
    no: 2,
    matkul: "Kalkulus",
    img: Example2,
    jmlh_mahasiswa: 21,
    kode_matkul: "18ASl22",
    jmlh_sks: 8,
    tindakan: "Upload",
  },
];

const TabelPretest: FC = (): ReactElement => {
  const { getDataTable } = useDataTable();
  return (
    <>
      <div className="p-8">
        <table className="min-w-full border border-gray-200  rounded-lg divide-y divide-neutral-400 dark:divide-gray-700">
          <thead className=" bg-gray-100 ">
            <tr>
              <th className="p-3 rounded-md">No.</th>
              <th className="text-start ">Mata Kuliah</th>
              <th className="text-start">Kode Matkul</th>
              <th className="text-start">SKS</th>
              <th className="text-start">Semester</th>
              <th className="text-start">Upload</th>
              <th className="text-start">Tindakan</th>
              <th className="text-start">Status</th>
              <th className="text-start">Waktu Selesai</th>
            </tr>
          </thead>
          {getDataTable.map((x, i) => (
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
                <td>Semester {x.semester}</td>

                <td className={`flex p-4 ${x.tindakan_pretest === "Upload" && "text-green-600"}`}>
                  {x.tindakan_pretest === "Upload" && (
                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8805 17.5577C10.3365 17.5573 9.8957 17.1165 9.89533 16.5725L9.896 11.0011C9.89618 10.9561 9.8784 10.913 9.84659 10.8812C9.81479 10.8494 9.7716 10.8316 9.72662 10.8317H7.76175C7.42846 10.8585 7.11596 10.6672 6.98819 10.3582C6.86043 10.0492 6.94657 9.6931 7.20143 9.47667L11.3331 5.34368C11.7229 4.97165 12.3363 4.97165 12.7261 5.34368L16.8577 9.47328C17.1116 9.6901 17.1971 10.0457 17.0695 10.3543C16.942 10.6628 16.6303 10.8542 16.2974 10.8284H14.3325C14.239 10.8284 14.1631 10.9042 14.1631 10.9977V16.5725C14.1628 17.1162 13.7223 17.5569 13.1787 17.5577H10.8805ZM6.79161 20.9349C5.28235 20.9334 4.05923 19.7103 4.05774 18.201V16.9293C4.07057 16.4803 4.43823 16.123 4.88738 16.123C5.33654 16.123 5.7042 16.4803 5.71703 16.9293V18.199C5.71778 18.7922 6.19844 19.2728 6.79161 19.2736H17.5848C18.178 19.2728 18.6586 18.7922 18.6594 18.199V16.9293C18.6722 16.4803 19.0399 16.123 19.489 16.123C19.9382 16.123 20.3058 16.4803 20.3187 16.9293V18.201C20.3172 19.7103 19.0941 20.9334 17.5848 20.9349H6.79161Z"
                        fill="#3EB449"
                      />
                      <mask
                        id="mask0_3705_3416"
                        maskUnits="userSpaceOnUse"
                        x="4"
                        y="5"
                        width="17"
                        height="16"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.8805 17.5577C10.3365 17.5573 9.8957 17.1165 9.89533 16.5725L9.896 11.0011C9.89618 10.9561 9.8784 10.913 9.84659 10.8812C9.81479 10.8494 9.7716 10.8316 9.72662 10.8317H7.76175C7.42846 10.8585 7.11596 10.6672 6.98819 10.3582C6.86043 10.0492 6.94657 9.6931 7.20143 9.47667L11.3331 5.34368C11.7229 4.97165 12.3363 4.97165 12.7261 5.34368L16.8577 9.47328C17.1116 9.6901 17.1971 10.0457 17.0695 10.3543C16.942 10.6628 16.6303 10.8542 16.2974 10.8284H14.3325C14.239 10.8284 14.1631 10.9042 14.1631 10.9977V16.5725C14.1628 17.1162 13.7223 17.5569 13.1787 17.5577H10.8805ZM6.79161 20.9349C5.28235 20.9334 4.05923 19.7103 4.05774 18.201V16.9293C4.07057 16.4803 4.43823 16.123 4.88738 16.123C5.33654 16.123 5.7042 16.4803 5.71703 16.9293V18.199C5.71778 18.7922 6.19844 19.2728 6.79161 19.2736H17.5848C18.178 19.2728 18.6586 18.7922 18.6594 18.199V16.9293C18.6722 16.4803 19.0399 16.123 19.489 16.123C19.9382 16.123 20.3058 16.4803 20.3187 16.9293V18.201C20.3172 19.7103 19.0941 20.9334 17.5848 20.9349H6.79161Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_3705_3416)"></g>
                    </svg>
                  )}
                  {x.tindakan_pretest}
                </td>
                <td>
                  {x.tindakan_pretest === "Upload" ? (
                    <button className="p-2 px-4 bg-gray-400 text-gray-300 font-semibold rounded-md">
                      Ajukan
                    </button>
                  ) : (
                    <button className="p-2 px-4 bg-blue-600 text-white font-semibold  rounded-md">
                      Ajukan
                    </button>
                  )}
                </td>
                <td>{x.status}</td>
                <td className="text-gray-400">{x.waktu_selesai}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default TabelPretest;
