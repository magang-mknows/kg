import { FC, ReactElement } from "react";
import Button from "@/components/Common/Button";
import Delete from "@/assets/StudyPlan/Delete.svg";
import PopupModal from "@/components/Common/PopupModal";
import { usePopupDeleteStudyPlan } from "@/hooks/StudyPlan/usePopupDeleteStudyPlan";

const PopupDeleteStudyPlan: FC = (): ReactElement => {
  const { popupDeleteStatus, setPopupDeleteStatus } = usePopupDeleteStudyPlan();

  return (
    <PopupModal
      onClose={() => setPopupDeleteStatus(false)}
      icon={Delete}
      popupTitle="Konfirmasi"
      lookup={popupDeleteStatus}
      className="!h-60 !w-[100%] text-md"
      widthModal="!w-[560px]"
    >
      <h1 className="py-2 text-xl font-normal text-black">
        Apakah anda ingin menghapus mata kuliah ini?
      </h1>
      <div className="flex justify-center gap-3 w-[90%] mt-4">
        <Button
          text="Ya, Hapus"
          className="w-[40%] md:w-[230px] h-[48px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
          onClick={() => setPopupDeleteStatus(false)}
          type={"button"}
        />
        <Button
          className="w-[40%] md:w-[230px] h-[48px] bg-[#106FA4] rounded-[8px] text-white"
          type={"button"}
          text="Tidak"
          onClick={() => setPopupDeleteStatus(false)}
        />
      </div>
    </PopupModal>
  );
};

export default PopupDeleteStudyPlan;
