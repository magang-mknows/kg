import { FC, ReactElement } from "react";

const ForgotSkeleton: FC = (): ReactElement => {
  return (
    <section className="animate-pulse flex flex-col gap-y-6 h-auto w-full mt-6">
      <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-100" />
      <div className="animate-pulse rounded-lg p-6 w-full h-auto bg-neutral-100" />
    </section>
  );
};

export default ForgotSkeleton;
