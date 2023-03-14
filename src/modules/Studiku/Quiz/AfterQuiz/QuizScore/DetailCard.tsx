import { FC, ReactElement } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { DetailCardProps } from "./type";

const DetailCard: FC<DetailCardProps> = ({ type, value }): ReactElement => {
  return (
    <section
      className={`${
        type === "trueAnswer"
          ? "bg-secondary-green-100 hover:bg-secondary-green-200"
          : type === "falseAnswer"
          ? "bg-secondary-red-100 hover:bg-secondary-red-200"
          : type === "timeFinished"
          ? "bg-secondary-yellow-100 hover:bg-secondary-yellow-200"
          : type === "totalQuestions" && "bg-neutral-200 hover:bg-neutral-300"
      } flex gap-4 h-24 items-center w-72 px-4 rounded-md shadow-sm transition-colors ease-in duration-300 cursor-pointer`}
    >
      {type === "trueAnswer" && <BsCheckCircleFill className="text-green-500 mt-1 text-4xl" />}
      {type === "falseAnswer" && <FaTimesCircle className="text-red-500 mt-1 text-4xl" />}
      {type === "timeFinished" && <MdAccessTimeFilled className="text-yellow-500 mt-1 text-4xl" />}
      {type === "totalQuestions" && <AiFillInfoCircle className="text-neutral-500 mt-1 text-4xl" />}
      <div>
        <h1 className="font-bold">{value}</h1>
        <h1>
          {type === "trueAnswer" && "Jawaban Benar"}
          {type === "falseAnswer" && "Jawaban Salah"}
          {type === "timeFinished" && "Waktu selesai"}
          {type === "totalQuestions" && "Total Soal"}
        </h1>
      </div>
    </section>
  );
};

export default DetailCard;
