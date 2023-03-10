import { FC, ReactElement } from "react";
import PopupBerhasil from "@/assets/popup-modal-berhasil.svg";
import VectorBerhasil from "@/assets/vector-popup-modal-berhasil.svg";

import PopupModal from "../Common/PopupModal";
import { usePopupSuccessStatus } from "@/hooks/Common/usePopupSuccessStatus";

const PopupModalSuccess: FC = (): ReactElement => {
  const { setPopupStatus, getPopupStatus } = usePopupSuccessStatus();
  return (
    <PopupModal
      lookup={getPopupStatus}
      onClose={() => setPopupStatus(!getPopupStatus)}
      popupTitle={"Anda Telah Selesai Melakukan Simulasi!"}
      description={"Kamu telah melakukan simulasi di hari Senin, 17 Januari 2023 Pukul 16:30 WIB."}
      image={PopupBerhasil}
      icon={VectorBerhasil}
    />
  );
};

export default PopupModalSuccess;
