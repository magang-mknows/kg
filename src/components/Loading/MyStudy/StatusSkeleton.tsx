import { FC, ReactElement } from "react";

const StatusSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse flex flex-col gap-y-6 h-auto w-full mt-6">tessss
      <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-500" />
      <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-500" />
      <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-500" />
      <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-500" />
      <div className="flex flex-col gap-y-8 my-6">
        <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-500" />
        <div className="animate-pulse rounded-lg p-3 w-full h-auto bg-neutral-500" />
        <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-500" />
      </div>
    </section>
  );
};

export default StatusSkeleton;