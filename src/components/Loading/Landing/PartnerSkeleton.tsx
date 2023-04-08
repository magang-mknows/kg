import { FC, ReactElement } from "react";
import useWindowSize from "@/hooks/Common/useWindowSize";

const MitraSkeleton: FC = (): ReactElement => {
  const { width } = useWindowSize();

  return (
    <div className="flex flex-col w-4/5 md:w-full">
      <h1 className="mt-[90px] mb-2 w-[75%] sm:w-[45%] md:w-1/3 h-[52px] gap-2 mx-auto bg-gray-200 rounded-md" />
      <p className="bg-gray-200 w-[70%] sm:w-[30%] md:w-[15%] h-7 rounded-md px-4 mx-auto" />
      <div className="flex items-center justify-center pt-[40px]">
        <div className="flex justify-center mx-auto gap-[120px] md:gap-[70px] md:px-10 w-[80%]">
          {(width as number) >= 1024 && (
            <>
              <div className="h-[170px] w-[170px] bg-gray-200 rounded-full" />
              <div className="h-[170px] w-[170px] bg-gray-200 rounded-full" />
              <div className="h-[170px] w-[170px] bg-gray-200 rounded-full" />
              <div className="h-[170px] w-[170px] bg-gray-200 rounded-full" />
              <div className="h-[170px] w-[170px] bg-gray-200 rounded-full" />
            </>
          )}

          {(width as number) < 1024 && (width as number) >= 640 && (
            <>
              <div className="h-[80px] w-[80px] bg-gray-200 rounded-full" />
              <div className="h-[80px] w-[80px] bg-gray-200 rounded-full" />
              <div className="h-[80px] w-[80px] bg-gray-200 rounded-full" />
            </>
          )}
          {(width as number) < 640 && (
            <div className="h-[300px] w-[300px] bg-gray-200 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MitraSkeleton;
