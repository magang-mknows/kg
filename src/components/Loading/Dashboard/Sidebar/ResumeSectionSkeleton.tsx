import { FC, ReactElement } from "react";
import useWindowSize from "@/hooks/Common/useWindowSize";

const ResumeSectionSkeleton: FC = (): ReactElement => {
  const { width } = useWindowSize();

  return (
    <div className="w-full rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="bg-gray-500 rounded-md relative px-6 pt-12 pb-28">
        <h1 className="mb-2 bg-gray-200 rounded-md w-[45%] h-11" />
        <div className="mb-2 flex flex-col gap-1">
          {(width as number) < 768 ? (
            <span className="bg-gray-200 h-6 w-3/4 rounded-sm" />
          ) : (
            <>
              <span className="bg-gray-200 h-6 w-4/5 rounded-sm" />
              <span className="bg-gray-200 h-6 w-1/3 rounded-sm" />
            </>
          )}
        </div>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-2 lg:gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="Card bg-gray-200 rounded-lg shadow-sm w-[140px] md:w-32 lg:w-40 h-40"
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default ResumeSectionSkeleton;
