import { FC, ReactElement } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import DetailCard from "./DetailCard";
import Button from "@/components/Common/Button";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuizScore: FC = (): ReactElement => {
  const data = {
    labels: ["Your Score"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#9de6f5c3", "#E5E5E5"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: 140,
  };

  return (
    <div className="px-20 py-14  min-h-screen">
      <section className="py-14 flex gap-44 items-center justify-center">
        <div className="w-64 h-64 relative flex items-center justify-center">
          <div className="absolute   rounded-full border-8 border-neutral-200/70">
            <Doughnut data={data} options={options} className="p-4" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-neutral-900 font-black">90</h1>
            <p className="text-xl">Point</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <DetailCard type="trueAnswer" value="9" />
          <DetailCard type="falseAnswer" value="1" />
          <DetailCard type="timeFinished" value="7 Hari 7 Malam" />
          <DetailCard type="totalQuestions" value="10" />
        </div>
      </section>
      <section className=" flex justify-end gap-x-6">
        <Button
          text={"Riwayat Quiz"}
          page="/"
          type="button"
          className="text-primary-500 border-2 border-primary-500 bg-white hover:bg-neutral-50 w-64 h-12 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
        />
        <Button
          text={"Coba Kembali (Sisa 2)"}
          page="/"
          type="button"
          className="bg-primary-500 border-2 border-primary-500 text-white hover:bg-primary-600 w-64 h-12 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
        />
      </section>
    </div>
  );
};

export default QuizScore;
