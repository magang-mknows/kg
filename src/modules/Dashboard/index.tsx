import { FC, lazy, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "@/components/Loading";

const DashboardLayout = lazy(() => import("@/layouts/Dashboard/DashboardLayout"));
const SidebarSection = lazy(() => import("./Sidebar"));
const ContentSection = lazy(() => import("./Content"));

const DashboardModules: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <Suspense fallback={<Loading />}>
        <DashboardLayout>
          <SidebarSection />
          <ContentSection />
        </DashboardLayout>
      </Suspense>
    </ErrorBoundary>
  );
};

export default DashboardModules;
