import { FC, ReactElement, Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const LeaderBoardSection = lazy(() => import("./LeaderBoardSection"));
const ResumeSection = lazy(() => import("./ResumeSection"));
const ArticleSection = lazy(() => import("./ArticleSection"));

const SidebarSection: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<>Loading...</>}>
        <ResumeSection />
        <LeaderBoardSection />
        <ArticleSection />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SidebarSection;
