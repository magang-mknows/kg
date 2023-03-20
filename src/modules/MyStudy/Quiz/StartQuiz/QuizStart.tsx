import GlobalButton from "@/components/Common/GlobalButton";
import ContentLayouts from "@/layouts/Content";
import MainLayouts from "@/layouts/Main";
import { FC, ReactElement, useState } from "react";
import { useQuizQuestion } from "@/hooks/MyStudy/useQuizQuestion";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useRouter } from "next/router";
import useWindowSize from "@/hooks/Common/useWindowSize";

const QuizStart: FC = (): ReactElement => {
  const windowSize = useWindowSize();
  const { getData } = useQuizQuestion();
  const router = useRouter();
  // onClick toggle
  const tempArray = getData[0].choices.map(() => false);
  const [selectedChoice, setSelectedChoice] = useState<boolean[]>(tempArray);
  // current index state
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState<number>(0);

  return (
    <MainLayouts withHScreen={false} withPadding={false} className="px-0 lg:px-[88px]">
      <div className="py-[52px] px-[38px] flex flex-col-reverse xl:flex-row gap-x-[55px]">
        <ContentLayouts
          withGap={false}
          className="justify-between items-center py-[44px] mx-auto lg:mx-0 px-0 lg:px-[51px] w-[90%] min-h-[550px] gap-[70px] border border-solid border-[#E5E5E5] rounded-lg"
        >
          <p className="text-black dark:text-neutral-100 text-xl font-semibold w-3/4 md:w-[85%] lg:w-full max-w-[680px]">
            {currentIndexQuestion + 1}. {getData[currentIndexQuestion].question}
          </p>
          <div className="flex flex-col justify-between w-[80%] lg:w-[540px] h-[320px]">
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
          </div>
          <div className="w-full flex justify-around items-center gap-x-3 max-w-[710px]">
            <GlobalButton
              text={(windowSize?.width as number) > 640 ? "Sebelumnya" : undefined}
              size="base"
              onClick={() => setCurrentIndexQuestion((prev) => prev - 1)}
              className="border-[#106FA4] !bg-transparent border-2 !text-[#106FA4] !h-12"
              icon={<IoIosArrowBack color="#106FA4" />}
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
                if (currentIndexQuestion === getData.length - 1) {
                  router.push("/studi-ku/menejemen-keuangan/quiz/nilai-quiz");
                  return;
                }
                setCurrentIndexQuestion((prev) => prev + 1);
              }}
            />
          </div>
        </ContentLayouts>

        <ContentLayouts
          withGap={false}
          className="h-[232px] gap-5 lg:w-[35%] max-w-[270px] mx-auto"
        >
          <div className="px-[22px] py-4 border border-solid border-[#E5E5E5] rounded-lg">
            <p className="text-base text-black dark:text-neutral-100 font-bold mb-6">
              Daftar Soal :
            </p>
            <div className="grid grid-cols-5 grid-rows-2 gap-x-1">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
                <div key={i} className="w-12 h-12 bg-transparent p-1">
                  <button className="w-full h-full bg-[#106FA4] rounded-lg m-auto text-base font-bold text-neutral-100">
                    {i + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-[#EE2D24] text-base font-bold">Sisa waktu : 00:01:30</p>
          </div>
        </ContentLayouts>
      </div>
    </MainLayouts>
  );
};

export default QuizStart;
