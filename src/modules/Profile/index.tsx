import { FC, ReactElement, lazy, Suspense } from "react";
import BaseLayouts from "@/layouts/Base";

const EditProfileSection = lazy(() => import("@/modules/Profile/EditProfileSection"));
const Profile: FC = (): ReactElement => {
  return (
    <>
      <Suspense fallback={"Skeleton loading...."}>
        <EditProfileSection />
      </Suspense>
    </>
  );
};

export default Profile;
