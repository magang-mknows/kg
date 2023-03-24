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
      className="!h-80 !w-[100%] text-md py-10"
    >
      <h1 className="py-2 text-2xl">Apakah anda ingin menghapus mata kuliah ini?</h1>
      <div className="flex gap-3 my-2 py-4">
        <Button
          text="Ya, Hapus"
          className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
          onClick={() => setPopupDeleteStatus(false)}
          type={"button"}
        />
        <Button
          className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
          type={"button"}
          text="Tidak"
          onClick={() => setPopupDeleteStatus(false)}
        />
      </div>
    </PopupModal>
  );
};

export default PopupDeleteStudyPlan;
