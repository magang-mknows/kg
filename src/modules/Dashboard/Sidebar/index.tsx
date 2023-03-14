import { FC, ReactElement, Suspense, lazy, Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";

const LeaderBoardSection = lazy(() => import("./LeaderBoardSection"));
const ResumeSection = lazy(() => import("./ResumeSection"));
const ArticleSection = lazy(() => import("./ArticleSection"));

const SidebarSection: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Loading...</>}>
        <div className="flex flex-col">
          <ResumeSection />
          <LeaderBoardSection />
          <ArticleSection />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default SidebarSection;
