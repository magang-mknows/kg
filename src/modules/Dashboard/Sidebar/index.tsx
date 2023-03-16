import { FC, ReactElement, Suspense, lazy, Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";

const LeaderBoardSection = lazy(() => import("./LeaderBoardSection"));
const ResumeSection = lazy(() => import("./ResumeSection"));
const ArticleSection = lazy(() => import("./ArticleSection"));

const SidebarSection: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
          <div className="flex xl:flex-col gap-x-10 md:flex-row lg:flex-row flex-col ">
            <ResumeSection />
            <LeaderBoardSection />
          </div>
          <ArticleSection />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default SidebarSection;
