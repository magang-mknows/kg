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
      className="!h-60 !w-[100%] text-md"
      widthModal="!max-w-[540px]"
      hasButton={false}
    >
      <h1 className="py-2 text-xl font-normal text-black dark:text-neutral-300">
        Kamu akan mengajukan konversi pada mata kuliah Logika Algoritma
      </h1>
      <div className="flex justify-center gap-3 my-2 w-full">
        <Button
          text="Kembali"
          className="w-[40%] md:w-[230px] h-12 border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
          onClick={() => {
            setPopupSubmissionStatus(false);
          }}
          type={"button"}
        />
        <Button
          className="w-[40%] md:w-[230px] h-12 bg-[#106FA4] rounded-[8px] text-white"
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
