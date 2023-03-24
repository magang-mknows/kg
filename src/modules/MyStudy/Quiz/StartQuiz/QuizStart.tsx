import GlobalButton from "@/components/Common/GlobalButton";
import ContentLayouts from "@/layouts/Content";
import MainLayouts from "@/layouts/Main";
import { FC, ReactElement, useState } from "react";
import { useQuizQuestion } from "@/hooks/MyStudy/useQuizQuestion";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useRouter } from "next/router";
import useWindowSize from "@/hooks/Common/useWindowSize";
import { useCurrentQuizNumber } from "@/hooks/MyStudy/useCurrentQuizNumber";
import QuizTimer from "./QuizTimer";

const QuizStart: FC = (): ReactElement => {
  const windowSize = useWindowSize();
  const { getQuestionsData } = useQuizQuestion();
  const router = useRouter();
  // onClick toggle
  // const tempArray = getData[0].choices.map(() => false);
  // const [selectedChoice, setSelectedChoice] = useState<boolean[]>(tempArray);
  // current index state
  // const [currentIndexQuestion, setCurrentIndexQuestion] = useState<number>(0);

  const { getCurrNumber, setCurrNumber } = useCurrentQuizNumber();

  return (
    <MainLayouts withHScreen={false} withPadding={false} className="px-0 lg:px-[88px]">
      <div className="py-[52px] px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
        <ContentLayouts
          withGap={false}
          className="justify-between  py-[44px] mx-auto lg:mx-0 px-0 lg:px-[51px] w-full min-h-[550px] gap-[70px] border border-solid border-[#E5E5E5] rounded-lg"
        >
          <p className="text-black text-center   w-full dark:text-neutral-100 text-xl font-semibold ">
            {getCurrNumber}. {getQuestionsData[getCurrNumber - 1].question}
          </p>
          <div className="flex flex-col items-center justify-between w-full h-[320px]">
            {getQuestionsData[getCurrNumber - 1].choices?.map((choice: string, index: number) => {
              return (
                <div
                  key={index}
                  className="relative w-[70%] py-4 border-[#106FA4] border-2 text-base rounded-lg text-[#106FA4]  flex place-content-center hover:bg-primary-500 hover:text-neutral-200"
                >
                  <label htmlFor={`${choice}`}>
                    {String.fromCharCode(97 + index)}. {choice}
                  </label>
                  <input
                    data-id={choice}
                    id={`${choice}`}
                    onChange={(e) => {
                      console.log(e.target.id);
                    }}
                    type="radio"
                    name="choice"
                    className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
                  />
                </div>
              );
            })}
          </div>

          {/* <div className="flex flex-col justify-between w-[80%] lg:w-[540px] h-[320px]">
            {getData[currentIndexQuestion].choices.map((choice: any, i: any) => (
              <div
                key={i}
                className={`${
                  selectedChoice[i] ? "bg-[#106FA4] text-[#FAFAFA]" : "hover:bg-blue-200"
                } relative w-full py-4 border-[#106FA4] border-2 text-base rounded-lg text-[#106FA4]  flex place-content-center`}
              >
                <label htmlFor="" className="">
                  {String.fromCharCode(97 + i)}. {choice}
                </label>
                <input
                  id={`${choice}`}
                  type="radio"
                  name="choice"
                  value={choice}
                  onChange={() => {
                    const newArr = selectedChoice.map(() => false);
                    newArr[i] = true;
                    setSelectedChoice(newArr);
                  }}
                  className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
                />
              </div>
            ))}
          </div> */}
          <div className="w-full flex justify-around items-center gap-x-4 px-10">
            <GlobalButton
              text={(windowSize?.width as number) > 640 ? "Sebelumnya" : undefined}
              size="base"
              className="border-[#106FA4] !bg-transparent border-2 !text-[#106FA4] !h-12"
              icon={<IoIosArrowBack color="#106FA4" />}
              onClick={() => {
                getCurrNumber > 1 && setCurrNumber(getCurrNumber - 1);
              }}
            />
            <GlobalButton
              text={(windowSize?.width as number) > 640 ? "Ragu-Ragu" : undefined}
              size="base"
              color="yellow"
              className="!h-12"
              icon={<AiOutlineQuestionCircle />}
            />
            <GlobalButton
              text={(windowSize?.width as number) > 640 ? "Selanjutnya" : undefined}
              size="base"
              color="blue"
              className="flex flex-row-reverse !h-12"
              icon={<IoIosArrowForward />}
              onClick={() => {
                getCurrNumber < getQuestionsData.length && setCurrNumber(getCurrNumber + 1);
              }}
            />
          </div>
        </ContentLayouts>

        <ContentLayouts withGap={false} className="h-[232px] gap-5 lg:w-[35%]  w-full mx-auto">
          <div className="px-[22px] py-4 border border-solid border-[#E5E5E5] rounded-lg">
            <p className="text-base text-black dark:text-neutral-100 font-bold mb-6">
              Daftar Soal :
            </p>
            <div className="flex flex-wrap gap-1">
              {[...Array(getQuestionsData.length)].map((data, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-transparent p-1"
                  onClick={() => setCurrNumber(index + 1)}
                >
                  <button
                    className={`${
                      index + 1 === getCurrNumber ? "border-primary-500" : ""
                    } text-neutral-500 w-full h-full  border-2 hover:bg-neutral-200 hover:text-neutral-800 transition-colors ease-in-out duration-300 rounded-lg m-auto text-base font-bold `}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <QuizTimer expiryTimestamp={2 / 60} />
          </div>
        </ContentLayouts>
      </div>
    </MainLayouts>
  );
};

export default QuizStart;
