import { FC, ReactElement } from "react";
import VectorLoading from "@/assets/vector-popup-modal-loading.svg";
import PopupBerhasil from "@/assets/popup-modal-berhasil.svg";

import PopupModal from "../Common/PopupModal";
import { usePopupScheduleStatus } from "@/hooks/Common/usePopupScheduleStatus";

const PopupModalSchedule: FC = (): ReactElement => {
  const { setPopupStatus, getPopupStatus } = usePopupScheduleStatus();
  return (
    <PopupModal
      lookup={getPopupStatus}
      onClose={() => setPopupStatus(!getPopupStatus)}
      popupTitle={"Anda Telah Selesai Melakukan Simulasi!"}
      description={"Kamu telah melakukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB."}
      icon={VectorLoading}
      image={PopupBerhasil}
    />
  );
};

export default PopupModalSchedule;
