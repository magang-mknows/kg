import { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import { AssigmentProps } from "./type.d";

const Assigment: FC<AssigmentProps> = ({
  titleAssigment,
  category,
  date,
  time,
  titleCourse,
  bgLine,
  classNameCategory,
  imgAssigment,
  alt,
}): ReactElement => {
  return (
    <div className="px-12 py-10">
      <div className="flex flex-col md:flex-row bg-[#ffffff] rounded-lg drop-shadow-lg relative p-0 justify-between  ">
        <div className={`flex absolute -left-0 rounded-tl-lg rounded-bl-lg h-full w-3 ${bgLine}`} />
        <div className="banner px-8 py-9">
          <h1 className="text-[20px] font-[700]">{titleAssigment}</h1>
          <p className="text-[#A3A3A3] font-[400] text-[16px] mt-3">{titleCourse}</p>
        </div>
        <div className="flex flex-col md:items-center mr-6 md:mr-0 px-8 mb-7 md:py-7">
          <Image alt="Image" width={21} src={imgAssigment as StaticImageData} />
          <p className={`mt-2 text-[16px] font-[600] ${classNameCategory}`}>{category}</p>
          <div className="flex flex-row text-[#262626] text-[16px] font-[400]">
            <p>{date}</p>
            <p className="px-2">|</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assigment;
