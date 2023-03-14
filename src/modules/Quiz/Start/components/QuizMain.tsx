import GlobalButton from "@/components/Common/GlobalButton";
import ContentLayouts from "@/layouts/Content";
import MainLayouts from "@/layouts/Main";
import { FC, ReactElement, useState } from "react";
import { quizQuestions } from "../../store/dummy-data";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const QuizMain: FC = (): ReactElement => {
  // onClick toggle
  const tempArray = quizQuestions[0].choices.map(() => false);
  const [selectedChoice, setSelectedChoice] = useState<boolean[]>(tempArray);
  // current index state
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState<number>(0);

  return (
    <MainLayouts withHScreen={false} withPadding={false} className="px-[88px] ">
      <div className="py-[52px] px-[38px] flex flex-col md:flex-row gap-x-[55px]">
        <ContentLayouts
          withGap={false}
          className="justify-between items-center py-[44px] px-[51px] min-w-[780px] min-h-[550px] gap-[70px] border border-solid border-[#E5E5E5] rounded-lg"
        >
          <p className="text-black text-xl font-semibold max-w-[680px]">
            {currentIndexQuestion + 1}. {quizQuestions[currentIndexQuestion].question}
          </p>
          <div className="flex flex-col justify-between w-[540px] h-[320px]">
            {quizQuestions[currentIndexQuestion].choices.map((choice, i) => (
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
                  onChange={(e) => {
                    console.log(e.target.value);
                    const newArr = selectedChoice.map(() => false);
                    newArr[i] = true;
                    setSelectedChoice(newArr);
                  }}
                  className="absolute top-0 left-0 w-full h-full appearance-none cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-around items-center">
            <button
              onClick={() => setCurrentIndexQuestion((prev) => prev - 1)}
              className="py-3 px-7 border-[#106FA4] border-2 text-base rounded-lg text-[#106FA4] flex items-center gap-x-1"
            >
              <IoIosArrowBack /> <p>Sebelumnya</p>
            </button>
            <GlobalButton
              text="Ragu-Ragu"
              size="base"
              color="yellow"
              icon={<AiOutlineQuestionCircle />}
            />
            <GlobalButton
              text="Selanjutnya"
              size="base"
              color="blue"
              className="flex flex-row-reverse"
              icon={<IoIosArrowForward />}
              onClick={() => setCurrentIndexQuestion((prev) => prev + 1)}
            />
          </div>
        </ContentLayouts>
        {/*  */}
        <ContentLayouts withGap={false} className="h-[232px] gap-5">
          <div className="px-[22px] py-4 border border-solid border-[#E5E5E5] rounded-lg">
            <p className="text-base text-black font-bold mb-6">Daftar Soal :</p>
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

export default QuizMain;
