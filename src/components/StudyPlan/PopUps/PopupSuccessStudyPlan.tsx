import Button from "@/components/Common/Button";
import PopupModal from "@/components/Common/PopupModal";
import { usePopupSuccessStudyPlan } from "@/hooks/StudyPlan/usePopupSuccessStudyPlan";
import { FC, ReactElement } from "react";
import Success from "@/assets/StudyPlan/Success.svg";
import InfoBlueIcon from "@/assets/StudyPlan/info-blue-vector.svg";
import Image from "next/image";

const PopupSuccessStudyPlan: FC = (): ReactElement => {
  const { popupSuccessStatus, setPopupSuccessStatus } = usePopupSuccessStudyPlan();

  return (
    <PopupModal
      onClose={() => setPopupSuccessStatus(false)}
      icon={Success}
      popupTitle="Berhasil"
      lookup={popupSuccessStatus}
      className="!h-80 !w-[100%] text-md"
      widthModal="!max-w-[590px]"
      hasButton={false}
    >
      <div className="flex items-center justify-around gap-x-[10px] bg-primary-100 rounded-lg p-3">
        <Image src={InfoBlueIcon} alt="info-blue-icon" className="w-5 h-5" />
        <p className="text-base text-primary-500 font-normal w-[80%] sm:w-auto">
          Hasil konversi bisa dilihat pada tab pengajuan
        </p>
      </div>
      <h1 className="py-2 text-xl font-normal text-black dark:text-neutral-300">
        Kamu berhasil mengajukan konversi mata kuliah Logika Algoritma
      </h1>
      <div className="w-full my-2">
        <Button
          text="Tutup"
          className="w-[95%] h-14 mx-auto rounded-lg bg-primary-500 text-white"
          onClick={() => setPopupSuccessStatus(false)}
          type={"button"}
        />
      </div>
    </PopupModal>
  );
};

export default PopupSuccessStudyPlan;
