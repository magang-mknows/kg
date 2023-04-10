import { FC, ReactElement } from "react";

const AboutSkeleton: FC = (): ReactElement => {
  return (
    <div className="animate-pulse flex flex-col lg:px-20 px-0 py-20 lg:flex-row w-screen h-auto lg:justify-between justify-start">
      <div className="w-[30%]">
        <div className="w-[500px] h-[382px] relative col-span-1 px-8">
          <span className="rectangle-up block relative md:w-5/12 w-3/12 h-[180px] bg-gray-200 rounded-md" />
          <span className="rectangle-down block relative lg:left-96 md:left-72 left-52 md:-top-14 -top-7 md:w-5/12 w-3/12 h-[90px] md:h-[180px] bg-gray-200 rounded-md" />
          <span
            className={
              "About-Landing block lg:w-[460px] md:w-8/12 w-7/12 h-[250px] md:h-[370px] object-cover rounded-xl absolute top-5 left-5 bg-gray-200"
            }
          />
          <span className="PlayCard block absolute lg:-right-34 md:-top-24 md:-right-7 right-24 -top-10 lg:mr-0 mr-4 my-4 px-2 bg-gray-200 h-[130px] md:h-[160px] w-[175px] md:w-[256px]" />

          <span className="Train block bg-gray-200 rounded-2xl w-1/3 md:w-1/2 h-[100px] md:px-6 md:py-4 py-3 absolute lg:-right-24 lg:top-94 md:-right-5 right-32 md:top-80 top-48" />
        </div>
      </div>
      <div className="flex lg:w-[50%] w-[100%] px-8 flex-col">
        <h1 className="h-12 w-[60%] mx-auto bg-gray-200 rounded-md" />
        <h1 className="h-12 w-[25%] mx-auto bg-gray-200 rounded-md mt-2" />
        <div className="py-10 mx-4 flex flex-col gap-2">
          <p className="h-7 w-full bg-gray-200 rounded-sm" />
          <p className="h-7 w-1/3 md:w-full bg-gray-200 rounded-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="checklist flex gap-2 mb-3">
            <span className="bg-gray-200 rounded-full w-6 h-6" />
            <h1 className="-mt-1 bg-gray-200 rounded-sm w-[60%] h-7" />
          </div>
          <div className="checklist flex gap-2 mb-3">
            <span className="bg-gray-200 rounded-full w-6 h-6" />
            <h1 className="-mt-1 bg-gray-200 rounded-sm w-[85%] h-7" />
          </div>
          <div className="checklist flex gap-2 mb-3">
            <span className="bg-gray-200 rounded-full w-6 h-6" />
            <h1 className="-mt-1 bg-gray-200 rounded-sm w-[70%] h-7" />
          </div>
          <div className="checklist flex gap-2 mb-3">
            <span className="bg-gray-200 rounded-full w-6 h-6" />
            <h1 className="-mt-1 bg-gray-200 rounded-sm w-[55%] h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
