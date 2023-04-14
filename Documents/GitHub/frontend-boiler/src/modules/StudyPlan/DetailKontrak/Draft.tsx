import { FC, ReactElement } from "react";
import TabelDraft from "@/components/StudyPlan/TabelDraft";
import Confirm from "@/assets/StudyPlan/Confirm.svg";
import { usePopupConfirmStatus } from "@/hooks/Common/usePopupConfirmSatus";
import GlobalButton from "@/components/Common/GlobalButton";
import Button from "@/components/Common/Button";
import PopupModal from "@/components/Common/PopupModal";

const Draft: FC = (): ReactElement => {
  const { setPopupStatus, getPopupStatus } = usePopupConfirmStatus();
  return (
    <>
      <TabelDraft />
      <div className="flex justify-end mr-8">
        <GlobalButton
          onClick={() => setPopupStatus(true)}
          color="green"
          size="regular"
          text={"Submit"}
        />
      </div>
      <div>
        <PopupModal
          onClose={() => setPopupStatus(false)}
          icon={Confirm}
          popupTitle="Konfirmasi"
          lookup={getPopupStatus}
          className="!h-80 !w-[100%] text-md py-10"
        >
          <h1 className="py-2 text-2xl">
            Apakah anda mengajukan Draft KRS sebanyak{" "}
            <span className="font-bold">4 Mata Kuliah</span>
          </h1>
          <div className="flex gap-3 my-2 py-4">
            <Button
              text="Kembali"
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={() => {
                setPopupStatus(false);
              }}
              type={"button"}
            />
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={"button"}
              text="Lanjut"
              onClick={() => {
                setPopupStatus(false);
              }}
            />
          </div>
        </PopupModal>
      </div>
    </>
  );
};

export default Draft;
