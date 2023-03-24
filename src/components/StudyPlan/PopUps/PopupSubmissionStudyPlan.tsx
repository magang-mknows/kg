import { FC, ReactElement } from "react";
import Button from "@/components/Common/Button";
import PopupModal from "@/components/Common/PopupModal";
import Confirm from "@/assets/StudyPlan/Confirm.svg";
import { usePopupSubmissionStudyPlan } from "@/hooks/StudyPlan/usePopupSubmissionStudyPlan";
import { usePopupSuccessStudyPlan } from "@/hooks/StudyPlan/usePopupSuccessStudyPlan";

const PopupSubmissionStudyPlan: FC = (): ReactElement => {
  const { popupSubmissionStatus, setPopupSubmissionStatus } = usePopupSubmissionStudyPlan();
  const { setPopupSuccessStatus } = usePopupSuccessStudyPlan();

  return (
    <PopupModal
      onClose={() => setPopupSubmissionStatus(false)}
      icon={Confirm}
      popupTitle="Konfirmasi"
      lookup={popupSubmissionStatus}
      className="!h-80 !w-[100%] text-md py-10"
    >
      <h1 className="py-2 text-2xl">
        Kamu akan mengajukan konversi pada mata kuliah Logika Algoritma
      </h1>
      <div className="flex gap-3 my-2 py-4">
        <Button
          text="Kembali"
          className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
          onClick={() => {
            setPopupSubmissionStatus(false);
          }}
          type={"button"}
        />
        <Button
          className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
          type={"button"}
          text="Lanjut"
          onClick={() => {
            setPopupSubmissionStatus(false);
            setPopupSuccessStatus(true);
          }}
        />
      </div>
    </PopupModal>
  );
};

export default PopupSubmissionStudyPlan;
